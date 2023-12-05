

const List = ({data}) => {
  return (
     <article className="person">
        {data.map(({image,name,email,age})=>(
          <>
          <img src={image} alt={"name"} />
          <div>
            <h4>{name}</h4>
            <p>{email}</p>
            <p>{age} years</p>
          </div>
          </>

        ))}
        
      </article>
   
  );
};

export default List;
