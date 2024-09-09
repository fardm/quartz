import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.Comments({
      provider: 'giscus',
      options: {
        // from data-repo
        repo: 'fardm/quartz',
        // from data-repo-id
        repoId: 'R_kgDOL-drYg',
        // from data-category
        category: 'Announcements',
        // from data-category-id
        categoryId: 'DIC_kwDOL-drYs4ChaaZ',
      }
    }),
  ],
  footer: Component.Footer({
    links: {
      تلگرام: "https://t.me/ifard_ir/",
      اینستاگرام: "https://instagram.com/ifard.ir/",
      توییتر: "https://twitter.com/ifard_ir/",
      
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ArticleTitle(),
    Component.ContentMeta({showReadingTime: false, showComma: false,}),
    Component.MobileOnly(Component.TableOfContents()),
    
  ],
  left: [  
    Component.DesktopOnly(Component.Darkmode()),
    Component.Graph({localGraph: {showTags: false,}, globalGraph: {showTags: false,}}),
    Component.Backlinks(),  
 
  ],
  right: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Darkmode()),
    Component.Search(),    
    Component.DesktopOnly(Component.TableOfContents()),    
  ],
}


 
// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.MobileOnly(Component.PageTitle()),
    Component.MobileOnly(Component.Spacer()),
    Component.MobileOnly(Component.Darkmode()),
    Component.Search(), 
  ],
  right: [
    Component.DesktopOnly(Component.PageTitle()),    
    Component.DesktopOnly(Component.Darkmode()),  
    Component.Graph(),  
  ],
}
