const express = require("express"); //IMPORT EXPRESS

const app = express(); //INIT EXPRESS 

app.get("/message/:id/:user", (request, response) => {
    const { id, user } = request.params;

    response.send(`
    Mensagem ID: ${id}.
    Para o usuário: ${user}.
    `);
});

app.get("/users", (request, response) => {
    const { page, limit } = request.query;

    response.send(`Página: ${page}. Mostrar ${limit}`);
});

const PORT = 3333; //DEFINIU PORTA DA API 
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));