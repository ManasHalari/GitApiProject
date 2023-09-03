import "./Avatar.css"

// eslint-disable-next-line react/prop-types
function Avatar({url,id}) {
  return (
    <div >
        <img src={url} alt="Avatar" className="image" />
        <h1>{id}</h1>
    </div>
  )
}

export default Avatar