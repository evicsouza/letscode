import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorComponent } from './editor-module/editor/editor.component';
import { LoginComponent } from './login-module/login/login.component';
import { MainComponent } from './geral-module/main/main.component';
import { ProgressoComponent } from './analytics-module/progresso/progresso.component';
import { AutoreflexaoComponent } from './srl/autoreflexao/autoreflexao.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"main", component:MainComponent, children: [
    {path:"progresso", component:ProgressoComponent, outlet:"principal"},
    {path:"editor", component:EditorComponent, outlet:"principal"},
    {path:"teste", component:AutoreflexaoComponent, outlet:"principal"},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
