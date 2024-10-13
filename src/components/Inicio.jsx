import { MainArticle } from "./MainArticle"
import { NewContainer } from "./NewContainer"
import { ArticlesContainer } from "./ArticlesContainer"

export const Inicio = () => {
  return (
    <>
    <div className="md:flex md:gap-8 md:mb-10">
    <MainArticle />
    <NewContainer />
  </div>
  <ArticlesContainer />
  </>
  )
}
