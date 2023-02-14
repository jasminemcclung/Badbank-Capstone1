function Home(){
    const ctx = React.useContext(UserContext);
    let i = ctx.user.length - 1;
    const account = ctx.user[i];
    // if(ctx.user[i]) {
      console.log(ctx.user)
    // }
    const header  = `current user: ${account.email}`
    return (
      <Card
        txtcolor="light"
        bgcolor="dark"
        header="Badbank Capstone"
        title="Welcome to BadBank"
        text="You can move around using the navigation bar. Start by logging in at the top right corner. If you do not have an account, create an account."
        body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
      />
    );  
  }