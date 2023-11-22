import Image from "next/image";
import badBunny from '../../../../../public/evil-rabbit.png';
import Links from "./Link";

export default function Navbar() {
  return (
    <nav className="h-screen w-20vw flex flex-col justify-between items-center p-4">
      <Image src={badBunny} alt="icon-bunny" width={40} height={40} />

      <Links icon={"HomeOutlined"} to={"home"}/>
      <Links icon={"SearchOutlined"} to={"home"}/>
      <Links icon={"GlobalOutlined"} to={"explore"}/>
      <Links icon={"CommentOutlined"} to={"chat"}/>
      <Links icon={"HeartOutlined"} to={"home"}/>
      <Links icon={"PlusOutlined"} to={"home"}/>

      <section>
        Avatar
      </section>

      <section>
        Menu
      </section>
    </nav>
  );
}
