## Selected input
output$uiAnalysis <- renderUI({
  Items <- c('A01', 'A02', 'A03', 'A04', 'A05')
  selectInput(inputId  = "analysis", 
              label    = "selectInput:", 
              choices  = Items, 
              selectize= FALSE,
              selected = Items[1])
})


## Numeric input
output$uiLeastCase <- renderUI({
  
  numericInput(inputId = "leastCase", 
               label   = "numericInput:", 
               min = 1, max = 50, value = 10, step = 1)
  
}) 

## radioInput;
output$uiLayout <- renderUI({
  Items <- c("Vertical", "Horizental")
  radioButtons(inputId = "layout", 
               label   = "radioButtons:",
               choices = Items, 
               selected = Items[1])
})

## Password
output$uiPasswd <- renderUI({
  passwordInput(inputId = "passwd", 
                label   = "passwordInput:",
                value = "")
})

## File input
output$uiUpload <- renderUI({
  fileInput(inputId = "upload", 
            label = "fileInput:")
})

## Check box;
output$uiCheckbox <- renderUI({
  checkboxInput(inputId = "Na", 
                label   = "checkboxInput",
                value   = FALSE)
})

## Check box group;
output$uiBoxgroup <- renderUI({
  checkboxGroupInput(inputId = "boxgroup", 
                     label   = "checkboxGroupInput:",
                     c("Cylinders" = "cyl", "Transmission" = "am", "Gears" = "gear"))
})

## Text input
output$uiText <- renderUI({
  textInput(inputId = "text", 
            label = "textInput:", 
            value = "")
})


## Action button
output$uiAction <- renderUI({
  actionButton(inputId = "action", 
               label = "actionButton:")
})


## Submit button
output$uiSubmit <- renderUI({
  submitButton(text = "submitButton:")
})



## Export button;
output$uiHTML <- renderUI({
  if (!is.null(input$tracking)) {
    if (input$tracking != "") {
      xml <- fromJSON(input$tracking)
      xml <- c(Time= date(), xml)
      XML <<- c(XML, paste("<h4>", paste(paste(names(xml), paste("<a style = 'color: red;'>", xml, "</a>"), sep = ":"), collapse = ";     "), "</h4>"))
      HTML(XML)
    }
  }
  
})


