import  "./header.css"
 export default function Header(){
     return(
        <div className="header">
        <div className="headerTitles">
          <span className="headerTitleSm">React & Node</span>
          <span className="headerTitleLg">BLOG</span>
        </div>
        <img
          className="headerImg"
          src="https://cdn.pixabay.com/photo/2017/08/28/19/15/background-2691002_1280.jpg"
          alt=""
        />
      </div>
     )
 }