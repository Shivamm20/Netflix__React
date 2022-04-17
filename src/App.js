import Card from "./Cards";
import Sdata from "./Sdata";

// function ncard(val) {
// return(
//   <Card
//   imgsrc={val.imgsrc}
//   title={val.title}
//   sname={val.sname}
//   link={val.links}
// />
// );
// }


function App() {
  return (
    
    <>
    <h1 className="heading_style">List of top 5 Netflix Series in 2020</h1>
    {/* {Sdata.map(ncard)}--Method1 */}


    {Sdata.map(function ncard(val) {
      return (
        <Card
          key={val.id}
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.links}
        />
      );
    })}
    </>
  );
}

export default App;
