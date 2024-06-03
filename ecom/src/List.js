function List(){
    var info = [
        {
          name:"Akansha Gautam",
          age : 29,
          work : "web developer",
    
        },
        {
          name:"Akashya kumar",
          age : 29,
          work : "Actor",
        },
        {
          name:"Virat Kholi",
          age : 29,
          work : "Batsman",
        }
      ]
      return (
    
        <table border="1">
           <tr>
              <th>Name </th>
              <th>Age</th>
              <th>Work</th>
            </tr>
        
      
        {
          info.map((data)=>
         <tr>
          <td>{data.name}</td>
          <td>{data.age}</td>
          <td>{data.work}</td>
          </tr>
    
    
          )
        }
    </table>
      );
}

export default List;