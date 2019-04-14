class Sql {

    select(db, selector = [], table = {}) {

        return new Promise((resolve, reject) => {
    
            selector = selector.join(',');

            let sql = `
            SELECT ${selector}
            FROM ${table};`;
    
            db.all(sql, (err, rows) => {
                if (err) {
                    reject(err);
                }
                resolve(rows);
            });
        });
    }
    
    insert(db, values, table) {
    
        return new Promise((resolve, reject) => {
    
            if (table.columns.length !== values.length) {
                let error = 'number of columns must be equal to values';
                reject(error);
            }
    
            let columns = table.columns.join(',');
            values = values.join(',');
    
            let sql = `
            INSERT INTO ${table.name} (${columns})
            VALUES (${values});`;
    
            db.run(sql, [], (err) => {
                if (err) {
                    reject(err);
                }
                resolve()
            });
        });
    }
    
    update(db, condition, values, table) {
        return new Promise((resolve, reject) => {
            
            if (table.columns.length !== values.length) {
                let error = 'number of columns must be equal to values';
                reject(error);
            }
    
            for (let i = 0; i < table.columns.length; i++) {
                table.columns[i] += ` = ${values[i]}`;
            }
            let updates = table.columns.join(',');
    
            let sql = `
            UPDATE ${table.name}
            SET ${updates}
            WHERE id = ${condition};`;
    
            db.run(sql, [], (err) => {
                if (err) {
                    reject(err);
                }
                resolve();
            });
    
        });
    }
    
    delete(db, selector, value, table) {
    
        return new Promise((resolve, reject) => {
    
            let condition = `${selector} = ${value}`;

            let sql = `
            DELETE FROM ${table.name}
            WHERE ${condition};`;
    
            db.run(sql, [], (err) => {
                if (err) {
                    reject(err);
                }
                resolve();
            });
        })
    }
} 

module.exports = Sql;