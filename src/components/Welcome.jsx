
export const Welcome = () => {
    const userSession = sessionStorage.getItem("user")
    const user = JSON.parse(userSession)
    console.log(user);
    
  return (
    <div className="w-[min(80%,30rem)] bg-blue-400 min-h-screen h-full mx-auto rounded-xl">
       <div className="min-h-screen flex flex-col items-center justify-center font-bold text-white text-center gap-5">
       <img src={user.userImage}/>
            <h1 className="text-xl md:text-3xl">Welcome: {user.userName}</h1>
            <h1>Your email is: {user.email}</h1>
       </div>
    </div>
  )
}
