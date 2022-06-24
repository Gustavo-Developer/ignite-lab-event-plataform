import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
  const { slug } = useParams<{ slug: string }>();
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug ? (
          <Video lessonSlug={slug} />
        ) : (
          <div className="flex min-h-screen flex-1 ">
            <div className="flex justify-content items-center m-auto">
              <h1 className="mt-8 text-[2.5rem] leading-tight">
                Clique em uma aula para iniciar 🚀
              </h1>
            </div>
          </div>
        )}
        <Sidebar />
      </main>
    </div>
  );
}
