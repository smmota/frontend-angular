import { Component, OnInit } from '@angular/core';
import {TreeNode} from 'primeng/api';
import { Organograma } from 'src/app/resources/models/Organograma';
import { OrganogramaService } from 'src/app/resources/services/organograma.service';

@Component({
  selector: 'app-organograma',
  templateUrl: './organograma.component.html',
  styleUrls: ['./organograma.component.scss']
})
export class OrganogramaComponent implements OnInit {

  data!: TreeNode[];
  selectedNode!: TreeNode;

  dataResult!: Organograma;

  constructor(private organogramaService: OrganogramaService) { }

  ngOnInit(): void {    

    this.data = [{
      label: 'Presidente',
      children: [
          {
              label: 'Vice Presidente 1',
              children: [
                  {
                      label: 'Gerente', type: 'leaf',
                      children:[                    
                          {
                              label: 'Coordenador 1.1', type: 'leaf',
                              children:[                    
                                {
                                    label: 'Operacional 1.1', type: 'leaf',
                                    
                                },                                             
                                {
                                    label: 'Operacional 1.1', type: 'leaf',
                                    
                                }
                              ]
                          }                                      
                      ]
                  },              
              ]
          },
          {
              label: 'Vice Presidente 2',
              children: [
                  {
                      label: 'Gerente 2.1', type: 'leaf',
                      children: [
                        {
                            label: 'Coordenador 1.1', type: 'leaf',
                            children: [
                              {
                                label: 'Operacional 1.2', type: 'leaf'
                              },
                              {
                                label: 'Operacional 1.2', type: 'leaf'
                              }
                            ]
                        },
                      
                    ]
                  },              
              ]
          }
      ]
    }];
  }
}
