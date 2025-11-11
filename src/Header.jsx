
export default function Header({src}) {
    

    
  return (
    <header>
        <img src={src} alt="chef claude logo" id="chef-logo" />
        <section id="title-tagline">
            <h1 id="nav-title">Chef Entrée Optimizer</h1>
            <p id="nav-tagline">"Your Kitchen's New CEO."</p>
        </section>
    </header>
  )
}