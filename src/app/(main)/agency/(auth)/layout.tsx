import React from 'react'

// 函数参数的类型约束: 参数为一个对象，其中包含一个名为 children 的属性，children 属性的类型是 React.ReactNode
const AuthLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="h-full flex items-center justify-center">
       {children}
    </div>
  )
}

export default AuthLayout
