import { Header } from "./components/Header"
import { MainArticle } from "./components/MainArticle"
import { NewContainer } from "./components/NewContainer"
import { ArticlesContainer } from "./components/ArticlesContainer"
import { ItenListContainer } from "./components/ItenListContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { New } from "./components/New"
import { Inicio } from "./components/Inicio"

export function App() {
  return (
    <main className="px-4 pt-6 pb-3 font-Inter lg:px-40 lg:pt-10" >
      <BrowserRouter>
      <Header/>
     

      
      <Routes>
      <Route path="/" element={<Inicio />}/>
      <Route path="/new" element={<New />}/>
      </Routes>

      </BrowserRouter>
    </main>
  )
}
