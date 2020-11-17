export class Alert {
  
  cssAlertFirst(objText) {
    return {
      html: `<span style='color: var(--default-octonary)'>${objText}<span>`,
      confirmButtonText: "Sim",
      confirmButtonColor: "var(--default-primary)",
      showCancelButton: true,
      background: 'var(--default-quinary)',
      cancelButtonColor: "var(--default-primary)",
      cancelButtonText: "Cancelar"
    }
  }

  cssAlertSecond(objText) {
    return {
      html: `<span style='color: var(--default-octonary)'>${objText}<span>`,
      confirmButtonColor: "var(--default-primary)",
      background: "var(--default-quinary)",
    }
  }
}