# redbous-hrnet-modal

Conversion du plugin Jquery.modal.js en react, il s'agit d'un composant simple d'utilisation permettant la mise en place d'une modal. On peut y ajouter un message ou directement un element react. On peut également customiser l'apparence de la modal par le biais d'une props.  

## Pré-requis d'installation 

node => 14.17.5

## Guide d'installation 

### Dans le terminal, à la racine du projet :

`npm install redbous-hrnet-modal`

### Dans les imports du fichier : 

`import { Modal } from 'redbous-hrnet-modal';`

## Guide d'utilisation

### Signature du composant : 

`Modal({ isActive, setIsActive, message = 'Action effectuée avec succées !', children = null, modalStyle = {} })`

### isActive et setIsActive :

=> Créer un état avec useState et transmettre l'état la fonction modifiant l'état

### message : 

=> On peut ajouter un message qui s'affichera au centre de la modal 

### children : 

=> On peut ajouter un element enfant au composant modal 

`<Modal isActive={isSubmit} setIsActive={setIsSubmit}>{children}</Modal>`

### modalStyle : 

=> On peut modifier le style de la modale en passant un objet directement via cette props
