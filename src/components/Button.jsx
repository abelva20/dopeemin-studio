/* eslint-disable react/prop-types */

const Button = ({title, id, rightIcon, containerClass, link}) => {
  return (
    <button 
    id={id} 
    className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 text-blue-100 ${containerClass}`}>
        <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
            <div>
              <a href={link}>
              {title}
              </a>
            </div>
        </span>
        {rightIcon}
    </button>
  )
}

export default Button