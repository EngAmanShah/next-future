import { db } from "@/configuration/firebase-config";
import { collection, query, where, getDocs } from "firebase/firestore";
import { notFound } from "next/navigation";
import ArticlePageClient from "../page";

export default async function ArticlePage({ params }) {
  const { lang, slug } = params;

  const articlesRef = collection(db, "articles");
  const q = query(articlesRef, where("slug", "==", slug));
  const snapshot = await getDocs(q);

  if (snapshot.empty) {
    notFound();
  }

  const docData = snapshot.docs[0].data();

  const article = {
    id: snapshot.docs[0].id,
    title: docData.title[lang] || docData.title.en,
    description: docData.description[lang] || docData.description.en,
    timestamp: docData.timestamp?.toDate().toISOString() || null,
    image: docData.image,
  };

  // Render client component and pass the fetched data
  return <ArticlePageClient article={article} lang={lang} />;
}
