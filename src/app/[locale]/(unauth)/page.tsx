import { getTranslations } from 'next-intl/server';


export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Index() {
  return (
    <>
    
   <h1>Hello World!, Once Again!,  NO ERRORS PLEAAESE, ok we tryy again, and we do it again</h1>
    </>
  );
}
