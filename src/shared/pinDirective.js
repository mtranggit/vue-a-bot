// function applyStyle(element, {value}) {
//   element.style.position = 'absolute'
//   Object.keys(value).forEach(position => {
//     element.style[position] = value[position]
//   })
// }

export default function(element, {value}) {
  element.style.position = 'absolute'
  Object.keys(value).forEach(position => {
    element.style[position] = value[position]
  })

  // export default {
  // bind: (element, binding) => {
  //   applyStyle(element, binding)
  // },
  // update: (element, binding) => {
  //   applyStyle(element, binding)
  // },

  // bind lifecycle hook is bound once the directive is bound to the the element
  // bind: (element, {value}) => {
  //   element.style.position = 'absolute'
  //   Object.keys(value).forEach(position => {
  //     element.style[position] = value[position]
  //   })
  // },
  // bind: (element, {arg, modifiers}) => {
  //   if (arg !== 'position') return
  //   element.style.position = 'absolute'
  //   Object.keys(modifiers).forEach(key => {
  //     element.style[key] = '5px'
  //   })
  // },

  // bind: element => {
  //   element.style.position = 'absolute'
  //   element.style.bottom = '5px'
  //   element.style.right = '5px'
  // },
}
