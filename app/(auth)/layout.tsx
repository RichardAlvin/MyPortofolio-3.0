import "./auth.css"

const layout = ({ children } : { children : React.ReactNode }) => {
  return (
    <div className="auth-layout">
      <div className="auth-container">
        {children}
      </div>
    </div>
  )
}

export default layout
