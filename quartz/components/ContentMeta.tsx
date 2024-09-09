import { formatDate, getDate } from "./Date"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import readingTime from "reading-time"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"
import { JSX } from "preact"
import style from "./styles/contentMeta.scss"

interface ContentMetaOptions {
  /**
   * Whether to display reading time
   */
  showReadingTime: boolean
  showComma: boolean
}

const defaultOptions: ContentMetaOptions = {
  showReadingTime: true,
  showComma: true,
}

export default ((opts?: Partial<ContentMetaOptions>) => {
  // Merge options with defaults
  const options: ContentMetaOptions = { ...defaultOptions, ...opts }

  function ContentMetadata({ cfg, fileData, displayClass }: QuartzComponentProps) {
    const text = fileData.text

    if (fileData.slug === "index") {
      return <></>
    }

    if (text) {
      const segments: (string | JSX.Element)[] = []

      if (fileData.dates) {
        const created = formatDate(getDate(cfg, fileData)!, cfg.locale) 
        const modifed = formatDate(fileData.dates?.modified, cfg.locale)
        if (created == modifed) {
          segments.push(` 📅 انتشار: ${created} `)
        } else {
          segments.push(` 📅 انتشار: ${created} `)
          segments.push(` 🔄 به‌روزرسانی: ${modifed} `)
        }
      }

      // Display reading time if enabled
      if (options.showReadingTime) {
        const { minutes, words: _words } = readingTime(text)
        const displayedTime = i18n(cfg.locale).components.contentMeta.readingTime({
          minutes: Math.ceil(minutes),
        })
        segments.push(displayedTime)
      }


      // Display status
      const status = fileData.frontmatter?.status || "نامشخص";
      if (status !== "نامشخص") {
        segments.push(` ${status} `)
      }

      const segmentsElements = segments.map((segment) => <span>{segment}</span>)

      return (
        <>
          <p show-comma={options.showComma} class={classNames(displayClass, "content-meta")}>
            {segmentsElements}
          </p>

          {/* نماش تصویر */}
          {fileData.frontmatter?.image && (
            <div style={{ marginTop: "10px" }}>
              <img
                src={`/img/${fileData.frontmatter.image}`}
                alt="Note Image"
                style={{ maxWidth: "100%", height: "auto", display: "block" }}
              />
            </div>
          )}
        </>
      )
      } else {
      return null
      }
      }

  ContentMetadata.css = style

  return ContentMetadata
}) satisfies QuartzComponentConstructor
