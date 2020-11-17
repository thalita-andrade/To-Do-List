export class Alert {
  objDarkTheme = { color: "grey", background: "#41474d" };
  objLightTheme = { color: "#8675b8", background: "#f1f3f4" };
  objTexts = {
    createTaskDark: "<span style='color: white'>Você deseja realmente criar essa tarefa?<span>",
    createTaskLight: "<span style='color: #8675b8'>Você deseja realmente criar essa tarefa?<span>",
    createSuccessDark: "<span style='color: white'>Sua tarefa foi criada com sucesso!<span>",
    createSuccessLight: "<span style='color: #8675b8'>Sua tarefa foi criada com sucesso!<span>",
    cancelCreateDark: "<span style='color: white'>Você deseja cancelar essa tarefa?<span>",
    cancelCreateLight: "<span style='color: #8675b8'>Você deseja cancelar essa tarefa?<span>",
    cancelSuccessDark: "<span style='color: white'>Cancelado com sucesso!<span>",
    cancelSuccessLight: "<span style='color: #8675b8'>Cancelado com sucesso!<span>",
    deleteTaskDark: "<span style='color: white'>Você deseja realmente deletar essa tarefa?<span>",
    deleteTaskLight: "<span style='color: #8675b8'>Você deseja realmente deletar essa tarefa?<span>",
    deleteSuccessDark: "<span style='color: white'>Sua tarefa foi deletada com sucesso!<span>",
    deleteSuccessLight: "<span style='color: #8675b8'>Sua tarefa foi deletada com sucesso!<span>",
    editTaskDark: "<span style='color: white'>Você deseja realmente editar?<span>",
    editTaskLight: "<span style='color: #8675b8'>Você deseja realmente editar?<span>",
    editSuccessDark: "<span style='color: white'>Sua tarefa foi editada com sucesso!<span>",
    editSuccessLight: "<span style='color: #8675b8'>Sua tarefa foi editada com sucesso!<span>",
    editConcludeDark: "<span style='color: white'>Sua tarefa foi editada e concluida com sucesso!<span>",
    editConcludeLight: "<span style='color: #8675b8'>Sua tarefa foi editada e concluida com sucesso!<span>",
    cancelEditDark: "<span style='color: white'>Você deseja cancelar as alterações?<span>",
    cancelEditLight: "<span style='color: #8675b8'>Você deseja cancelar as alterações?<span>",
  }

  cssAlertFirst(objColor, objText) {
    return {
      html: objText,
      confirmButtonText: "Sim",
      confirmButtonColor: objColor.color,
      showCancelButton: true,
      background: objColor.background,
      cancelButtonColor: objColor.color,
      cancelButtonText: "Cancelar"
    }
  }

  cssAlertSecond(objColor, objText) {
    return {
      html: objText,
      confirmButtonColor: objColor.color,
      background: objColor.background,
    }
  }
}