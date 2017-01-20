library(RJSONIO)

shinyUI(bootstrapPage(
  tagList(
    tags$head(
      tags$script(src = "app.js"),
      tags$link(rel="stylesheet", type="text/css",href="style.css")
    )
  ),
  
  div(class = "input",
      div(class = "wPanel", 
          uiOutput("uiAnalysis"),
          uiOutput("uiLeastCase"),
          uiOutput("uiLayout"),br(),br(),
          uiOutput("uiPasswd"),
          uiOutput("uiUpload"),
          uiOutput("uiCheckbox"),
          uiOutput("uiBoxgroup"),
          uiOutput("uiText"),
          uiOutput("uiAction"),br(),
          uiOutput("uiSubmit"),
          textInput(inputId = "tracking", label = "")
      )
  ),
  
  div(class = "output", uiOutput("uiHTML"))
  
))


