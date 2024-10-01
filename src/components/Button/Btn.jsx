import classes from './Button.module.css'


export default function Button({children, isActive, ...props} ){
    // console.log('Button Render.')  
    return <button 
    { ...props }
    className={isActive ? `${classes.button} ${classes.active}` : classes.button} 
    onDoubleClick={() => console.log('doubleClick')}>
        {children}
        </button>
}