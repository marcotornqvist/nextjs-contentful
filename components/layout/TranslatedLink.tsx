import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

const pathTranslations: any = {
  fi: {
    "/landing": "/etusivu",
  },
  // en: {
  //   "/landing": "/home",
  // },
  // sv: {
  //   "/landing": "/hem",
  // },
};

const TranslatedLink = ({ href, children }: any) => {
  const { locale } = useRouter();

  // Get translated route for non-default locales
  const translatedPath = locale && pathTranslations[locale]?.[href];
  console.log(translatedPath);
  // Set `as` prop to change displayed URL in browser
  const as = translatedPath ? `/${locale}${translatedPath}` : undefined;

  return (
    <Link href={href} as={as}>
      {children}
    </Link>
  );
};

export default TranslatedLink;
