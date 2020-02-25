exports.run = (client, message, fs, args, config, shell) => {
    fs.writeFile('metodos/pingar.sh', `ping ${args[0]}`, function (err) {
        if (err) throw err;
        });
   
        message.channel.send(`Pingando ${args[0]}`)
   
       setTimeout(function() {
           shell.exec(`screen -d -m ./metodos/pingar.sh`); // é recomendado que você use screen para executar o comando seu o seu bot paralisar :)
       }, 5000);
}

// se você quer usar tipo um arquivo .py ou .pl, é essencial, que em fs.writeFile você bote:
// fs.writeFile('metodos/pingar.sh', `python python-super-legal.py ${args[0]}`, function (err) {
// se quiser botar mais args, bote ${args[1]} e assim vai :)
// por favor, se você for usar uma .sh, use chmod 777 nomedashell.sh
// por favor, se você for usar uma .sh, use chmod 777 nomedashell.sh
// por favor, se você for usar uma .sh, use chmod 777 nomedashell.sh
// por favor, se você for usar uma .sh, use chmod 777 nomedashell.sh
// por favor, se você for usar uma .sh, use chmod 777 nomedashell.sh
// por favor, se você for usar uma .sh, use chmod 777 nomedashell.sh
// por favor, se você for usar uma .sh, use chmod 777 nomedashell.sh
// por favor, se você for usar uma .sh, use chmod 777 nomedashell.sh
// por favor, se você for usar uma .sh, use chmod 777 nomedashell.sh
// por favor, se você for usar uma .sh, use chmod 777 nomedashell.sh