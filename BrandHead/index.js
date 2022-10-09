import Head from "next/head"
import React from "react"
import { useRouter } from "next/router"

const BrandHead = ({
  description = "Champions for beautifully designed, solidly engineered digital experiences",
  title = "Mshindi Creations",
  iconUrl = "/logoAssets/ico/01.ico",
  author = "Mshindi Creations",
  slogan = description,
  meta = [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
  ],
}) => {
  const { asPath } = useRouter()

  const currentUrl = asPath.split("/")[1]
  const currentPath = currentUrl?.includes("?")
    ? currentUrl?.slice(
        0,
        currentUrl.split("")?.findIndex((char) => char === "?") ??
          currentUrl.length - 1
      )
    : currentUrl

  const pageTitle = `${title}  ${
    currentPath
      ? " | " + currentPath[0]?.toUpperCase() + currentPath.slice(1)
      : " - " + slogan
  }`

  const metaData = [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: pageTitle || "Mshindi Creations",
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: pageTitle || "Mshindi Creations",
    },
    {
      name: `twitter:description`,
      content: description,
    },
  ].concat(meta)

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta charSet='UTF-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
      <link rel='apple-touch-icon' href={iconUrl} key='apple' />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href={iconUrl}
        key='icon32'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href={iconUrl}
        key='icon16'
      />
      <link rel='icon' href={iconUrl} key='favicon' />
    </Head>
  )
}

export default BrandHead

BrandHead.defaultProps = {
  lang: `en`,
  meta: [],
}
