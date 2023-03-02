function getPositionClass(modifiers) {
  if (modifiers.top) {
    return "top";
  } else if (modifiers.bottom) {
    return "bottom";
  } else if (modifiers.left) {
    return "left";
  } else if (modifiers.right) {
    return "right";
  }

  return "top";
}

export function TooltipDirective(el, binding) {
  el.setAttribute("data-tooltip", binding.value?.text || binding.value);
  el.classList.add("with-tooltip");

  const position =
    binding.value.position || getPositionClass(binding.modifiers);
  el.classList.add(`tooltip--${position}`);
}
