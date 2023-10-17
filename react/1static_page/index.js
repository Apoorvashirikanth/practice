
function Header(){
    return(
       <header>
           <nav className = "nav">
               <img src = "./react-logo.png" className="nav-logo" />
               <ul className = "nav-items">
                   <li>Pricing</li>
                   <li>About</li>
                   <li>Contact</li>
               </ul>
           </nav>
       </header>

   )

function Footer(){
    return(
        <footer className="nav-footer">
             <small>2023 apoorva development. All rights reserved</small>
        </footer>
    )
}

function MainComponent(){
    return(
        <div>
            <h1>reasons why i like react</h1>
        <ol>
            <li>react is cool</li>
            <li>its composable</li>
            <li>I love react</li>
        </ol>
        </div>
    )
}

function MyFirstComponent(){    //parent component
    // children compnents 
    return(
    <div>
        <Header />            
        <MainComponent />
        <Footer />
    </div>
)};

ReactDOM.render(<MyFirstComponent />, document.getElementById("root"));