import Header from "@/components/Header/page"
import Main from "@/components/Main/page"
import Section from "@/components/Section/page"
import Item from "@/components/Items/page"
import Section1 from "@/components/Section1/page"
import Section2 from "@/components/Section2/page"
import Blog from "@/components/Blog/page"

export default function page() {
  return (
    <div>
      <Header />
      <Main />
      <Section />
      <Item />
      <Section1 />
      <Section2 />
      <Blog />
    </div>
  )
}
