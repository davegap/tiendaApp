"use strict";(self.webpackChunkappTienda=self.webpackChunkappTienda||[]).push([[728],{7728:(S,d,c)=>{c.r(d),c.d(d,{PagesModule:()=>F});var s=c(6814),p=c(4670),t=c(4946);const m_apiUrl="http://143.244.188.159:8080";var g=c(9862);let f=(()=>{class o{constructor(e){this.http=e,this.apiUrl=`${m_apiUrl}/categoria`}buscarTodos(){return this.http.get(`${this.apiUrl}/buscarTodas`)}agregarCategoria(e){return this.http.post(`${this.apiUrl}/nuevaCategoria`,e)}eliminarCategoria(e){return this.http.delete(`${this.apiUrl}/eliminar/{id}?id=${e.id}`)}actualizarCategoria(e){return this.http.put(`${this.apiUrl}/actualizarCategoria`,e)}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(g.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var n=c(95);function b(o,i){1&o&&(t.TgZ(0,"div")(1,"button",13),t._uU(2,"Guardar"),t.qZA()())}function _(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"button",14),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.actualizar())}),t._uU(1," Actualizar "),t.qZA()}}function h(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td")(8,"div",15)(9,"button",16),t._uU(10," Acciones "),t.qZA(),t.TgZ(11,"ul",17)(12,"li")(13,"a",18),t.NdJ("click",function(){const u=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.cargarCategoriaForm(u))}),t._uU(14,"Editar"),t.qZA()(),t.TgZ(15,"li")(16,"a",18),t.NdJ("click",function(){const u=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.eliminar(u))}),t._uU(17,"Eliminar"),t.qZA()()()()()()}if(2&o){const e=i.$implicit;t.xp6(2),t.Oqu(e.id),t.xp6(2),t.Oqu(e.nombre),t.xp6(2),t.Oqu(e.descripcion)}}let Z=(()=>{class o{constructor(e,r){this.categoriaService=e,this.fb=r,this.categorias=[],this.isCheckSave=!0,this.formulario=this.fb.group({id:null,nombre:[""],descripcion:[""]})}ngOnInit(){this.buscarTodos()}buscarTodos(){this.categoriaService.buscarTodos().subscribe(e=>{this.categorias=e})}guardar(){this.categoriaService.agregarCategoria(this.formulario.value).subscribe(e=>{this.buscarTodos(),this.formulario.reset()})}eliminar(e){this.categoriaService.eliminarCategoria(e).subscribe(r=>{this.buscarTodos(),this.formulario.reset()})}cargarCategoriaForm(e){this.isCheckSave=!1,this.formulario.reset({id:e.id,nombre:e.nombre,descripcion:e.descripcion})}actualizar(){this.categoriaService.actualizarCategoria(this.formulario.value).subscribe(e=>{this.buscarTodos(),this.formulario.reset(),this.isCheckSave=!0})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(f),t.Y36(n.qu))},o.\u0275cmp=t.Xpm({type:o,selectors:[["pages-categoria"]],decls:33,vars:4,consts:[[1,"text-center"],[1,"container","mt-4"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"mb-3"],["for","nombreInput",1,"form-label"],["type","text","id","nombreInput","formControlName","nombre","placeholder","Ingrese el nombre",1,"form-control"],["for","descripcionInput",1,"form-label"],["type","text","id","descripcionInput","formControlName","descripcion","placeholder","Ingrese la descripci\xf3n",1,"form-control"],[1,"text-end"],[4,"ngIf","ngIfElse"],["btnActualizar",""],["id","tablaRegistros",1,"table","table-striped"],[4,"ngFor","ngForOf"],["type","submit",1,"btn","btn-primary"],["type","button",1,"btn","btn-warning",3,"click"],[1,"dropdown"],["type","button","id","dropdownMenuButton","data-bs-toggle","dropdown","aria-expanded","false",1,"btn","btn-secondary","dropdown-toggle"],["aria-labelledby","dropdownMenuButton",1,"dropdown-menu"],[1,"dropdown-item",3,"click"]],template:function(e,r){if(1&e&&(t.TgZ(0,"div",0)(1,"h1"),t._uU(2,"CATEGORIAS"),t.qZA()(),t.TgZ(3,"div",1)(4,"form",2),t.NdJ("ngSubmit",function(){return r.guardar()}),t.TgZ(5,"div",3)(6,"label",4),t._uU(7,"Nombre"),t.qZA(),t._UZ(8,"input",5),t.qZA(),t.TgZ(9,"div",3)(10,"label",6),t._uU(11,"Descripci\xf3n"),t.qZA(),t._UZ(12,"input",7),t.qZA(),t.TgZ(13,"div",8),t.YNc(14,b,3,0,"div",9),t.YNc(15,_,2,0,"ng-template",null,10,t.W1O),t.qZA()(),t._UZ(17,"br")(18,"hr"),t.TgZ(19,"div",1)(20,"table",11)(21,"thead")(22,"tr")(23,"th"),t._uU(24,"ID"),t.qZA(),t.TgZ(25,"th"),t._uU(26,"Nombre"),t.qZA(),t.TgZ(27,"th"),t._uU(28,"Descripci\xf3n"),t.qZA(),t.TgZ(29,"th"),t._uU(30,"Opciones"),t.qZA()()(),t.TgZ(31,"tbody"),t.YNc(32,h,18,3,"tr",12),t.qZA()()()()),2&e){const a=t.MAs(16);t.xp6(4),t.Q6J("formGroup",r.formulario),t.xp6(10),t.Q6J("ngIf",r.isCheckSave)("ngIfElse",a),t.xp6(18),t.Q6J("ngForOf",r.categorias)}},dependencies:[s.sg,s.O5,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u]}),o})(),C=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-cliente"]],decls:2,vars:0,template:function(e,r){1&e&&(t.TgZ(0,"p"),t._uU(1,"cliente works!"),t.qZA())}}),o})(),T=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-pedido"]],decls:2,vars:0,template:function(e,r){1&e&&(t.TgZ(0,"p"),t._uU(1,"pedido works!"),t.qZA())}}),o})(),v=(()=>{class o{constructor(e){this.http=e,this.apiUrl=`${m_apiUrl}/producto`}buscarTodos(){return this.http.get(`${this.apiUrl}/buscarTodos`)}agregar(e){return this.http.post(`${this.apiUrl}/nuevoProducto`,e)}eliminar(e){return this.http.delete(`${this.apiUrl}/eliminar/{id}?id=${e.id}`)}actualizar(e){return console.log(e),this.http.put(`${this.apiUrl}/actualizarProducto`,e)}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(g.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function U(o,i){if(1&o&&(t.TgZ(0,"option",23),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.nombre," ")}}function A(o,i){1&o&&(t.TgZ(0,"div")(1,"button",24),t._uU(2,"Guardar"),t.qZA()())}function q(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"button",25),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.actualizar())}),t._uU(1," Actualizar "),t.qZA()}}function x(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"div",26)(3,"span",27),t._uU(4),t.qZA()()(),t.TgZ(5,"td")(6,"div",26)(7,"span",27),t._uU(8),t.qZA()()(),t.TgZ(9,"td")(10,"div",26)(11,"span",27),t._uU(12),t.qZA()()(),t.TgZ(13,"td")(14,"div",26)(15,"span",27),t._uU(16),t.qZA()()(),t.TgZ(17,"td")(18,"div",26)(19,"span",27),t._uU(20),t.qZA()()(),t.TgZ(21,"td")(22,"div",26)(23,"span",27),t._uU(24),t.ALo(25,"currency"),t.qZA()()(),t.TgZ(26,"td")(27,"div",26)(28,"span",27),t._uU(29),t.ALo(30,"number"),t.qZA()()(),t.TgZ(31,"td")(32,"div",28)(33,"button",29),t._uU(34," Acciones "),t.qZA(),t.TgZ(35,"ul",30)(36,"li")(37,"a",31),t.NdJ("click",function(){const u=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.cargarProductoForm(u))}),t._uU(38,"Editar"),t.qZA()(),t.TgZ(39,"li")(40,"a",32),t._uU(41,"Eliminar"),t.qZA()()()()()()}if(2&o){const e=i.$implicit;t.xp6(4),t.Oqu(e.id),t.xp6(4),t.Oqu(e.categoriaId),t.xp6(4),t.Oqu(e.referencia),t.xp6(4),t.Oqu(e.nombre),t.xp6(4),t.Oqu(e.descripcion),t.xp6(4),t.Oqu(t.xi3(25,7,e.precioUnitario,"COP")),t.xp6(5),t.Oqu(t.xi3(30,10,e.unidadesDisponibles,"1.0-0"))}}const y=[{path:"categorias",component:Z},{path:"clientes",component:C},{path:"pedidos",component:T},{path:"productos",component:(()=>{class o{constructor(e,r,a){this.categoriaService=e,this.productoService=r,this.fb=a,this.categorias=[],this.productos=[],this.isCheckSave=!0,this.formulario=this.fb.group({id:null,referencia:null,nombre:null,descripcion:null,unidadesDisponibles:0,precioUnitario:0,categoriaId:0})}ngOnInit(){this.buscarTodos()}buscarTodos(){this.categoriaService.buscarTodos().subscribe(e=>{this.categorias=e}),this.productoService.buscarTodos().subscribe(e=>{this.productos=e})}cargarProductoForm(e){this.isCheckSave=!1,this.formulario.reset({id:e.id,referencia:e.referencia,descripcion:e.descripcion,precioUnitario:e.precioUnitario,unidadesDisponibles:e.unidadesDisponibles,categoriaId:e.categoriaId,nombre:e.nombre})}guardar(){this.productoService.agregar(this.formulario.value).subscribe(e=>{this.buscarTodos(),this.formulario.reset()})}actualizar(){this.productoService.actualizar(this.formulario.value).subscribe(e=>{this.buscarTodos(),this.formulario.reset(),this.isCheckSave=!0})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(f),t.Y36(v),t.Y36(n.qu))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-producto"]],decls:64,vars:5,consts:[[1,"text-center"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"mb-3"],["for","categoria",1,"form-label","fw-bold"],["id","categoria","formControlName","categoriaId",1,"form-select"],[3,"value",4,"ngFor","ngForOf"],[1,"row"],[1,"col-md-6"],["for","referencia",1,"form-label","fw-bold"],["type","text","id","referencia","placeholder","Ingrese la referencia","formControlName","referencia",1,"form-control"],["for","nombre",1,"form-label","fw-bold"],["type","text","id","nombre","placeholder","Ingrese el nombre","formControlName","nombre",1,"form-control"],["for","descripcion",1,"form-label","fw-bold"],["type","text","id","descripcion","placeholder","Ingrese la descripci\xf3n","formControlName","descripcion",1,"form-control"],["for","precio",1,"form-label","fw-bold"],["type","number","id","precio","placeholder","Ingrese el precio unitario","formControlName","precioUnitario",1,"form-control"],["for","unidades",1,"form-label","fw-bold"],["type","number","id","unidades","placeholder","Ingrese las unidades disponibles","formControlName","unidadesDisponibles",1,"form-control"],[1,"text-end"],[4,"ngIf","ngIfElse"],["btnActualizar",""],["id","tablaRegistros",1,"table","table-striped"],[4,"ngFor","ngForOf"],[3,"value"],["type","submit",1,"btn","btn-primary"],["type","button",1,"btn","btn-warning",3,"click"],[1,"mb-0"],[1,"form-text"],[1,"dropdown"],["type","button","id","dropdownMenuButton","data-bs-toggle","dropdown","aria-expanded","false",1,"btn","btn-secondary","dropdown-toggle"],["aria-labelledby","dropdownMenuButton",1,"dropdown-menu"],[1,"dropdown-item",3,"click"],[1,"dropdown-item"]],template:function(e,r){if(1&e&&(t.TgZ(0,"div",0)(1,"h1"),t._uU(2,"PRODUCTOS"),t.qZA()(),t.TgZ(3,"form",1),t.NdJ("ngSubmit",function(){return r.guardar()}),t.TgZ(4,"div",2)(5,"label",3),t._uU(6,"Categor\xeda"),t.qZA(),t.TgZ(7,"select",4),t.YNc(8,U,2,2,"option",5),t.qZA()(),t.TgZ(9,"div",6)(10,"div",7)(11,"div",2)(12,"label",8),t._uU(13,"Referencia"),t.qZA(),t._UZ(14,"input",9),t.qZA()(),t.TgZ(15,"div",7)(16,"div",2)(17,"label",10),t._uU(18,"Nombre"),t.qZA(),t._UZ(19,"input",11),t.qZA()()(),t.TgZ(20,"div",2)(21,"label",12),t._uU(22,"Descripci\xf3n"),t.qZA(),t._UZ(23,"input",13),t.qZA(),t.TgZ(24,"div",6)(25,"div",7)(26,"div",2)(27,"label",14),t._uU(28,"Precio Unitario"),t.qZA(),t._UZ(29,"input",15),t.qZA()(),t.TgZ(30,"div",7)(31,"div",2)(32,"label",16),t._uU(33,"Unidades Disponibles"),t.qZA(),t._UZ(34,"input",17),t.qZA()()(),t.TgZ(35,"div",18),t.YNc(36,A,3,0,"div",19),t.YNc(37,q,2,0,"ng-template",null,20,t.W1O),t.qZA()(),t._UZ(39,"hr"),t.TgZ(40,"div",0)(41,"h2"),t._uU(42,"Listado"),t.qZA()(),t.TgZ(43,"table",21)(44,"thead")(45,"tr")(46,"th"),t._uU(47,"Id"),t.qZA(),t.TgZ(48,"th"),t._uU(49,"Id Categor\xeda"),t.qZA(),t.TgZ(50,"th"),t._uU(51,"Referencia"),t.qZA(),t.TgZ(52,"th"),t._uU(53,"Nombre"),t.qZA(),t.TgZ(54,"th"),t._uU(55,"Descripci\xf3n"),t.qZA(),t.TgZ(56,"th"),t._uU(57,"Precio Unitario"),t.qZA(),t.TgZ(58,"th"),t._uU(59,"Unidades Disponibles"),t.qZA(),t.TgZ(60,"th"),t._uU(61,"Opciones"),t.qZA()()(),t.TgZ(62,"tbody"),t.YNc(63,x,42,13,"tr",22),t.qZA()()),2&e){const a=t.MAs(38);t.xp6(3),t.Q6J("formGroup",r.formulario),t.xp6(5),t.Q6J("ngForOf",r.categorias),t.xp6(28),t.Q6J("ngIf",r.isCheckSave)("ngIfElse",a),t.xp6(27),t.Q6J("ngForOf",r.productos)}},dependencies:[s.sg,s.O5,n._Y,n.YN,n.Kr,n.Fj,n.wV,n.EJ,n.JJ,n.JL,n.sg,n.u,s.JJ,s.H9]}),o})()}];let w=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[p.Bz.forChild(y),p.Bz]}),o})(),F=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[s.ez,w,n.UX]}),o})()}}]);