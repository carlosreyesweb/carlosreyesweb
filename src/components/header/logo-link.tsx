import Image from "next/image"
import Link from "next/link"
import logo from "../../../public/logo.svg"

export function LogoLink() {
  return (
    <Link href="/">
      <Image src={logo} alt="Carlos Reyes" className="w-24" priority />
    </Link>
  )
}
