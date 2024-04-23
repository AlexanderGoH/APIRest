import { NgFor, NgForOf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgFor, NgForOf],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input()

  teams = [
    {
      name: "América de Cali",
      city: "Cali",
      logo: "https://3.bp.blogspot.com/-sMgU-3PvxoU/XDjJdvi00SI/AAAAAAABTts/9LD8ldol_Yw1ynA69Hu9y4uFucvbLXQOQCLcBGAs/s1600/America%2Bde%2BCali.png"
    },
    {
      name: "Alianza FC",
      city: "Valledupar",
      logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhqsiajVPMWqD697IrU1uJB-G17v04r5sQHgXBJHhHGeCUWWXu9GbJSP64dMY42rogm31Ru3UINvVYvdSmL-w0_bzyV7lTfAIlH6uYLGLDPBQ0iBH1JD7IufXBEjijk1QUGnoqCeT3TOTAbrjbiKFcF_SEO3NjVyeLuciFfsJaT1oO3TxyysJcyjzdzkt4/s16000/Alianza%20FC.png"
    },
    {
      name: "Junior FC",
      city: "Barranquilla",
      logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh0K-79Hx98UCfQ-qeP9DyqJszdoEdR2KAUQfCaOKVvIkek0vt6hgejQ5dszSvJYj_q8IhRuru24fm41uyDJ69O-ttCYuN63wEtcamP35X6myQ7o2fGNEGsYXYt3LnouSeV3kXVhNgldB9DdHFHYB-L-aguUnCIhJxrcBXqGen8l2xNvCPzIOAUEYoNwPw/s16000/Atletico%20Junior.png"
    },
    {
      name: "Jaguares FC",
      city: "Montería",
      logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhRl5u1L7mblgyC1dNbRK0S6yBeUrcl9L-vaEMW-0sc1liYzm5e1ZWP3cGBNefcQkhus0Qjv7urSZxuug_g2dzHfGMCMshDCHX-D5tAby3jAM-Vl0RlfDlEImG3i1GhmRe0jFIleZTyXAH8T5fl_2LDI3A2X3FTTDSqj4qbEuZ8l4HKooiHWLa_a5tRw4Y/s16000/Jaguares%20FC.png"
    },
    {
      name: "Envigado FC",
      city: "Envigado",
      logo: "https://1.bp.blogspot.com/-f26u0pGWqT4/X59l4iHeu3I/AAAAAAABhOM/H9b5RKz8RNUK610J5ObSQXii6WDoCI2-ACLcBGAsYHQ/s16000/Envigado%2BFC.png"
    },
    {
      name: "Deportes Tolima",
      city: "Ibagué",
      logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjeohGq5QVrAly8dGoBtZ_zD40pq1yQNU4vo86OQdwCj5RPN5cXBthuEMdhsIVvFrt9ZG3zbco7qq0Rx58Q2OwIUsL2pCpDfb57VsPH1mKgxHuo8JoIlI0zoh1KLV19lOfDTneq602OOmEdOapj3ig5OPOZ0QsOVhIcG3gVO4V1_OapnftHhIaZL70FUMM/s16000/Deportes%20Tolima.png"
    },
    {
      name: "Fortaleza CEIF",
      city: "Bogotá",
      logo: "https://4.bp.blogspot.com/-jdR2S62E8yU/WWLgrQGlV2I/AAAAAAABMQU/epnB6V_BiE0C6KAxaJfHKVAiIGhjCZV7ACLcBGAs/s1600/Fortaleza%2BFC.png"
    },
    {
      name: "Boyacá Chicó FC",
      city: "Tunja",
      logo: "https://4.bp.blogspot.com/-i71tNI-Xrto/XF5Ou6O_mgI/AAAAAAABUcU/uLhb_cmDo6of-8I1nHRju2CeL5pJZxCigCLcBGAs/s1600/Boyaca%2BChico%2BFC.png"
    },
    {
      name: "Deportivo Pereira",
      city: "Pereira",
      logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEieaGEfHra9ey95o68Dw8LjpjweOIJCaTSuwHlTgGkwvi4OrM1QjLQKjxtj3M-jvlOFZrNuiR9kF8UuVpZU1aFho9DwMJ4MrPxmwMMXlodCSfszKMgd-RtfG2qXSsH_koCTM7cqK71AxjtybS3hpswIjlib30KfvxDJLJMPiTTr-7GFVAWa3EUYRz3D/s16000/Deportivo%20Pereira.png"
    },
    {
      name: "Atlético Bucaramanga",
      city: "Bucaramanga",
      logo: "https://4.bp.blogspot.com/-iC2oY6Oq5xI/WWHb794-9GI/AAAAAAABMNE/-nGWHOSHIPcZeEpKG83grsAkXmJqyZnlwCLcBGAs/s1600/Club%2BAtletico%2BBucaramanga.png"
    },
    {
      name: "Independiente Santa Fe",
      city: "Bogotá",
      logo: "https://2.bp.blogspot.com/-YvPqw60ZdX8/XEoQ-WLCyVI/AAAAAAABT8M/M4ob_CCqGYsjD135S41w96OZRDZ8d_J0wCLcBGAs/s1600/Independiente%2BSanta%2BFe.png"
    },
    {
      name: "Águilas Doradas",
      city: "Rionegro",
      logo: "https://4.bp.blogspot.com/-vmuVWrQQfGA/WWHaVd5CJzI/AAAAAAABMMg/V4CFdQEA0dQgvIRi1phRdrWDEC9QtDlAQCLcBGAs/s1600/Aguilas%2BDoradas.png"
    },
    {
      name: "Once Caldas",
      city: "Manizales",
      logo: "https://1.bp.blogspot.com/-S48vAww2s_M/WWHZy2YHFHI/AAAAAAABMMU/3oeUEjl2V-wPTt62uFSR3J_pV4jEnxAIgCLcBGAs/s1600/Once%2BCaldas.png"
    },
    {
      name: "La Equidad CD",
      city: "Bogotá",
      logo: "https://2.bp.blogspot.com/-xnKw1v-3QQw/WWHZVkJT-0I/AAAAAAABMMI/JqsPQ9gfv1QtsHnHbn-DVakTq2QCLPVqgCLcBGAs/s1600/La%2BEquidad%2BFC.png"
    },
    {
      name: "Atlético Nacional",
      city: "Medellín",
      logo: "https://4.bp.blogspot.com/-wX-3LN1md6w/Wj0wm06NnAI/AAAAAAABQlo/RtSG-oBEhFgJBcoEcgRdwhzsZ_SdgrVkACLcBGAs/s1600/Club%2BAtletico%2BNacional.png"
    },
    {
      name: "Independiente Medellín",
      city: "Medellín",
      logo: "https://3.bp.blogspot.com/-d8gWYscmjsw/XGBb8WmTgqI/AAAAAAABUdc/bVmjZXyy2ucyqdkkDajjXtoUQHU3ec8fACLcBGAs/s1600/Deportivo%2BIndependiente%2BMedellin.png"
    },
    {
      name: "Deportivo Pasto",
      city: "Pasto",
      logo: "https://4.bp.blogspot.com/-irqdk8LCYLk/WWHVQaOLNrI/AAAAAAABMKw/4jbewc7duKUM6u5UUcQavx4VrQhDyY0-QCLcBGAs/s1600/Asociacion%2BDeportivo%2BPasto.png"
    },
    {
      name: "Patriotas Boyacá",
      city: "Tunja",
      logo: "https://4.bp.blogspot.com/-UZ9253jkbwU/WWHUzx57dII/AAAAAAABMKk/ZA1VbjBGGpEaia3CMe4i-FTSrdR_asK3gCLcBGAs/s1600/Patriotas%2BBoyaca.png"
    },
    {
      name: "Millonarios FC",
      city: "Bogotá",
      logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiwx6WG-5aJG5j2InkicoP1K6u3J7eBzZ74eaa1_KYyBVcw--kTzec5eSIXGW4L0kKXkSEWNYniVxi6y-_9dPXbRipt_XfSm875H8gpRakx3e8Yzbwp2l8tPJNM9JcTOwBnCLxVqR2uic8T16luTPcIZW7wZ2jVe3BrGMZKEtpYMO0TCbyBdqgmf4GrQwA/s16000/Millonarios%20FC.png"
    },
    {
      name: "Deportivo Cali",
      city: "Cali",
      logo: "https://1.bp.blogspot.com/-w4puuXfFR1s/WWHSM7WVGaI/AAAAAAABMJk/gidBF7j5A48YxDcbmysD4YQc0G7FY2ngACLcBGAs/s1600/Deportivo%2BCali.png"
    },
  ];
}
