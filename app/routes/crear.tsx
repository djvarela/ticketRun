export const loader = async () => {
  console.log('params');
return null
};

export const action = async ({ request }) => {
    const form = await request.formData();
    const title = form.get('titulo') ;
    const body = form.get('contenido') ;
  
  console.log('test');
  return null
      // const post = await db.post.create({ data: fields });
  }
  


export const crear = () => {
  return <div>crear</div>;
};
