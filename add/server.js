const http = require('http');
const fs = require('fs');
const qs = require('qs');
const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        fs.readFile('./views/index.html', 'utf8', (err, dataHtml) => {
            let people = JSON.parse(fs.readFileSync('./data/data.json', 'utf8'));
            let html = '';
            for (let i = 0; i < people.length; i++) {
                html += `
                 <tr>
                    <th scope="row">${people[i].id}</th>
                    <td>${people[i].name}</td>
                    <td>${people[i].age}</td>
                    <td>${people[i].sex}</td>
                    <td><img src="${people[i].image}" style="width:50px; height=50px"></td>
                    <td>
                    <form method="POST">
                    <input name="idDelete" type="hidden" value='${people[i].id}'>
                    <button type="submit">Delete</button>
                    </form>
                    </td>
                    <td>
                    <form method="POST">
                    <input name="idUpdate" type="hidden" value='${people[i].id}'>
                    <button type="submit">Update</button>
                    </form>
                    </td>
                 </tr>
                `
            }
            dataHtml = dataHtml.replace('{people}', html);
            res.write(dataHtml);
            res.end();
        })
    }
    if (req.method === 'POST') {
        let data = ''
        req.on('data', (chunk) => {
            data = data + chunk;
        })
        req.on('end', () => {
            let user = qs.parse(data);
            if (user.idDelete != null) {
                let people = JSON.parse(fs.readFileSync('./data/data.json', 'utf8'));
                let index = people.findIndex(item => {
                    return item.id === user.idDelete
                });
                people.splice(index, 1);
                fs.writeFileSync('./data/data.json', JSON.stringify(people));
                res.writeHead(301, {location: '/'})
                res.end()
            } else if (user.idUpdate != null) {
                let people = JSON.parse(fs.readFileSync('./data/data.json', 'utf8'));
                let index = people.findIndex(item => {
                    return item.id === user.idUpdate;
                });
                let userEdit = people[index];
                fs.readFile('./views/edit.html', 'utf8', (err, data)=>{
                    data = data.replace('{editId}',userEdit.id)
                    data = data.replace('{editName}',userEdit.name)
                    data = data.replace('{editAge}',userEdit.age)
                    data = data.replace('{editSex}',userEdit.sex);
                    res.writeHead(200,{'Content-Type':'text/html'});
                    res.write(data);
                    res.end()
                })
            } else if (user.editId != null) {
                let people = JSON.parse(fs.readFileSync('./data/data.json', 'utf8'));
                console.log(people)
                console.log(user)
                let index = -1;
                for (let i = 0; i < people.length; i++) {
                    if(people[i].id === user.editId){
                        index = i;
                    }
                }
                console.log(index)
                people[index].name = user.editName;
                people[index].age = user.editAge;
                people[index].sex = user.editSex;
                people[index].image = user.editImage;
                console.log(user.editImage)
                fs.writeFileSync('./data/data.json', JSON.stringify(people));
                res.writeHead(301, {location: '/'})
                res.end()
            } else {
                let people = JSON.parse(fs.readFileSync('./data/data.json', 'utf8'));
                people.push(user)
                fs.writeFileSync('./data/data.json', JSON.stringify(people));
                res.writeHead(301, {location: '/'})
                res.end()
            }

        })
    }
})

server.listen(3001, () => {
    console.log('server is running')
})

