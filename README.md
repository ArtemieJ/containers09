# Lucrarea de laborator Nr. 9: Optimizarea imaginilor Docker

##  Scopul lucrarii
Familiarizarea cu metodele de optimizare a imaginilor Docker prin reducerea dimensiunii acestora utilizand mai multe tehnici.

##  Sarcina
Compararea mai multor metode de optimizare a imaginilor Docker:
- Stergerea fisierelor temporare si a dependentelor neutilizate
- Reducerea numarului de straturi
- Utilizarea unei imagini de baza minime (Alpine)
- Reambalarea imaginii
- Utilizarea tuturor metodelor combinate

## ??? Descrierea pasilor

1. **Crearea structurii de lucru**:
   - Folder `containers09` cu subfolder `site/` ce contine fisierul `index.html`.

2. **Construirea imaginii de baza (`mynginx:raw`)**:
   - Imagine pe baza de `ubuntu:latest`.
   - Instalare Nginx si copierea fisierelor site-ului.

3. **Optimizarea 1: Stergerea fisierelor temporare (`mynginx:clean`)**:
   - Adaugare `apt-get clean` si stergere directoare temporare.

4. **Optimizarea 2: Reducerea numarului de straturi (`mynginx:few`)**:
   - Combinarea comenzilor `RUN` pentru a evita straturi separate.

5. **Optimizarea 3: Utilizarea Alpine (`mynginx:alpine`)**:
   - Imagine de baza foarte mica (`alpine:latest`) si folosirea `apk` pentru instalare.

6. **Reambalarea (`mynginx:repack`)**:
   - Creare container din `mynginx:raw`, export si import intr-o noua imagine.

7. **Optimizare completa (`mynginx:minx` si `mynginx:min`)**:
   - Utilizarea tuturor metodelor combinate.
   - Repachetarea imaginii pentru o dimensiune si mai mica.

8. **Verificarea dimensiunilor imaginilor**:

| Imagine             | Dimensiune |
|---------------------|------------|
| `mynginx:raw`       | 224 MB     |
| `mynginx:clean`     | 225 MB     |
| `mynginx:few`       | 143 MB     |
| `mynginx:repack`    | 211 MB     |
| `mynginx:alpine`    | 19.5 MB    |
| `mynginx:minx`      | 14.4 MB    |
| `mynginx:min`       | 14.3 MB    |

## ? Raspunsuri la intrebari

### 1. Care metoda de optimizare a imaginilor vi se pare cea mai eficienta?
Cea mai eficienta este combinarea tuturor metodelor (imaginea `mynginx:min`), care a redus dimensiunea la doar **14.3 MB**.

### 2. De ce curatirea cache-ului pachetelor intr-un strat separat nu reduce dimensiunea imaginii?
Pentru ca fiecare comanda `RUN` creeaza un strat nou. Fisierele sterse intr-un strat ulterior raman in straturile anterioare, deci imaginea finala nu devine mai mica.

### 3. Ce este repachetarea imaginii?
Repachetarea consta in exportarea unui container Docker si importarea sistemului sau de fisiere intr-o imagine noua. Astfel, se elimina metadatele si unele straturi neoptimizate, ceea ce poate reduce dimensiunea imaginii.

##  Concluzii
- Optimizarea imaginilor este esentiala pentru spatiu de stocare si eficienta.
- Combinarea mai multor metode aduce cele mai bune rezultate.
- Alpine este o alegere excelenta pentru imagini Docker minimaliste.

##  Repozitoriu
[Link catre repozitoriu GitHub](https://github.com/ArtemieJ/containers09)
