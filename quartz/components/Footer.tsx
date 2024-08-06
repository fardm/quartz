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
        <a href="https://instagram.com/ifard.ir/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="1em" height="1em" fill="currentColor" style="vertical-align: middle;"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg> اینستاگرام</a>
        <a href="https://t.me/ifard_ir/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor" style="vertical-align: middle;"><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/></svg> تلگرام</a>
        <a href="https://twitter.com/ifard_ir/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor" style="vertical-align: middle;"><path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/></svg> توییتر</a>
        <a href="https://www.aparat.com/ifard"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="1em" height="1em" fill="currentColor" style="vertical-align: middle;"><path d="M 15.173828 2.609375 C 11.917119 2.5264688 8.94875 4.7335781 8.1875 8.0332031 L 7.078125 12.837891 C 10.172125 7.7938906 15.497719 4.4664844 21.386719 3.8964844 L 16.582031 2.7871094 C 16.110656 2.6782344 15.639072 2.6212187 15.173828 2.609375 z M 23.615234 7 C 16.369702 7.1611924 9.7609531 11.980828 7.6582031 19.314453 C 5.0702031 28.340453 10.289453 37.753797 19.314453 40.341797 C 28.339453 42.929797 37.753797 37.711547 40.341797 28.685547 C 42.929797 19.659547 37.711547 10.246203 28.685547 7.6582031 C 26.993172 7.1729531 25.28728 6.9628018 23.615234 7 z M 35.162109 7.078125 C 40.206109 10.172125 43.533516 15.497719 44.103516 21.386719 L 45.212891 16.582031 C 46.083891 12.811031 43.737797 9.0575 39.966797 8.1875 L 35.162109 7.078125 z M 20.191406 12.589844 C 20.456244 12.610334 20.723031 12.658375 20.988281 12.734375 C 23.111281 13.342375 24.338469 15.556687 23.730469 17.679688 C 23.122469 19.802687 20.906203 21.029875 18.783203 20.421875 C 16.660203 19.813875 15.433969 17.599562 16.042969 15.476562 C 16.575844 13.618937 18.337541 12.446412 20.191406 12.589844 z M 31.726562 15.898438 C 31.991494 15.918996 32.258063 15.966844 32.523438 16.042969 C 34.646437 16.650969 35.874625 18.865281 35.265625 20.988281 C 34.657625 23.110281 32.441359 24.338469 30.318359 23.730469 C 28.195359 23.122469 26.968172 20.908156 27.576172 18.785156 C 28.108172 16.927531 29.872041 15.754527 31.726562 15.898438 z M 24.035156 22.001953 C 25.139156 22.020953 26.017047 22.930156 25.998047 24.035156 C 25.979047 25.139156 25.069844 26.017047 23.964844 25.998047 C 22.860844 25.979047 21.982953 25.069844 22.001953 23.964844 C 22.020953 22.860844 22.930156 21.982953 24.035156 22.001953 z M 16.884766 24.126953 C 17.149697 24.147443 17.416266 24.193531 17.681641 24.269531 C 19.804641 24.877531 21.032828 27.093797 20.423828 29.216797 C 19.814828 31.339797 17.598563 32.566031 15.476562 31.957031 C 13.353562 31.349031 12.125375 29.134719 12.734375 27.011719 C 13.266375 25.154094 15.030244 23.983521 16.884766 24.126953 z M 3.8964844 26.615234 L 2.7871094 31.419922 C 1.9171094 35.190922 4.2622031 38.943453 8.0332031 39.814453 L 12.837891 40.923828 C 7.7948906 37.829828 4.4664844 32.504234 3.8964844 26.615234 z M 28.417969 27.433594 C 28.6829 27.454084 28.951422 27.502125 29.216797 27.578125 C 31.339797 28.186125 32.566031 30.400437 31.957031 32.523438 C 31.348031 34.646437 29.134719 35.873625 27.011719 35.265625 C 24.888719 34.657625 23.661531 32.443313 24.269531 30.320312 C 24.801531 28.462687 26.563447 27.290162 28.417969 27.433594 z M 40.923828 35.162109 C 37.829828 40.205109 32.504234 43.533516 26.615234 44.103516 L 31.419922 45.212891 C 35.190922 46.082891 38.943453 43.737797 39.814453 39.966797 L 40.923828 35.162109 z"></path></svg> آپارات</a>

       
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



