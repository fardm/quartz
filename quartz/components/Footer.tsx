import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <hr />

        <ul>
        <a href="https://instagram.com/ifard.ir/"><i class="fa-brands fa-instagram"></i> اینستاگرام</a>
        <a href="https://t.me/ifard_ir/"><i class="fa-regular fa-paper-plane"></i> تلگرام</a>
        <a href="https://twitter.com/ifard_ir/"><i class="fa-brands fa-x-twitter"></i> ایکس</a>
        </ul>
        
        <br/>

        <p>          
          {i18n(cfg.locale).components.footer.createdWith}{" "}
          <a href="https://quartz.jzhao.xyz/">Quartz</a>
        </p>

        <p>
          {year}©        
        </p>



      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
