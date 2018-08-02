// testeadmos usando node (require) no se puede ocupar en el navegador, es parecido a script, pero es para node
const assert = require('chai').assert; // assert permite comparar cosas
global.window = global; // se está creando un window
require('../src/js/validate'); // require trae el archivo (lo importa)

describe('validar emails', ()=>{
  describe('Debería verificar si existe el arroba', ()=>{ // en idioma humano
    it('Debería el correo tener sólo un arroba', ()=>{ // caso de prueba, se debe explicar cada caso aparte (unitario). Es más específico que describe.
      assert.equal(validateEmail("asdf@asdf.com"), true); //assert.equal verifica que el parámetro 1 sea igual al parámetro 2
            assert.equal(validateEmail("asdf@@asdf.com"), false);
            assert.equal(validateEmail("asdf.com"), false);
        });
        it('Debería el correo tener un arroba antes del dominio', ()=>{
            assert.equal(validateEmail(".com@asdf"), false);
            assert.equal(validateEmail("fabian@laboratoria.la"), true);
        });
    });(
    describe('Debería verificar si tiene un dominio', ()=>{
        it('Tiene un punto y luego solo caracteres del alfabeto', ()=>{
            assert.equal(validateEmail('asdf@asdf'), false);
            assert.equal(validateEmail('asdf@asdf.'), false);
        });
    }));
    describe('Debería verificar que no tenga carácteres raros', ()=>{

    });(
    describe('Debería verificar que tenga al menos 1 caracter antes del arroba', ()=>{

    }));
});
