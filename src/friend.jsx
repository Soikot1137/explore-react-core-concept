import './friends.css'
export default function Friend({friend}){
   const{name,email,id,phone,username}=friend
 return(
    <div className="ndBox">
        <h3>ID: {id}</h3>
        <h4>Name: {name}</h4>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Username: {username}</p>
    </div>
 )
}