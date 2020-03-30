module.exports = (app,methods,options) => {
    const tasks = methods.loadController('tasks',options);
    tasks.methods.post('/create',tasks.addTask, {auth:true});
    tasks.methods.get('/list',tasks.listTask, {auth:true});
    
}