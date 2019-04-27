import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanejamentoService } from './planejamento.service';
import { SelfInstructionComponent } from './self-instruction/self-instruction.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { SelecionarPlanejamentoComponent } from './selecionar-planejamento/selecionar-planejamento.component';
import { CadastroPlanejamentoComponent } from './cadastro-planejamento/cadastro-planejamento.component';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { SliderModule } from 'primeng/slider';

import { AutoReflexaoComponent } from './auto-reflexao/auto-reflexao.component';
import { ButtonModule } from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {TabViewModule} from 'primeng/tabview';
import {DialogModule} from 'primeng/dialog';

import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { RiscoEstudanteComponent } from './risco-estudante/risco-estudante.component';
import {ProgressBarModule} from 'primeng/progressbar';
import { ChatbotComponent } from './chatbot/chatbot.component';

@NgModule({
  declarations: [
    AutoReflexaoComponent,
    CadastroPlanejamentoComponent,
    ChatbotComponent,
    RiscoEstudanteComponent,
    SelecionarPlanejamentoComponent,
    SelfInstructionComponent,
    PaginaNaoEncontradaComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    DialogModule,
    FormsModule,
    ProgressBarModule,
    InputTextareaModule,
    DropdownModule,
    ButtonModule,
    TableModule,
    ToastModule,
    SliderModule,
    TabViewModule,
    ButtonModule,
    ToastModule,
  ],
  providers:[PlanejamentoService],
  exports:[RiscoEstudanteComponent]

})
export class SrlModule { }
