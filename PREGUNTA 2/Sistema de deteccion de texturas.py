# -*- coding: utf-8 -*-
"""
Created on Thu Jun 16 13:03:53 2022

@author: MiPC
Para ejecutar sin errores debemos tener
instalado "numpy","imutils","tkinter", "cv2", "PIL"
una vez cargadas debemos ejecutarlo en spyder
"""

from tkinter import *
from tkinter import filedialog
from PIL import Image
from PIL import ImageTk
import cv2
import imutils
import numpy as np
lista=[]
img1 =255* np.ones((300,60,3),np.uint8)
image=None
image2=None
sens=70
def elegir_imagen():
    global image,image2,path_image
    
  
    path_image = filedialog.askopenfilename(filetypes = [
        ("image", ".jpeg"),
        ("image", ".png"),
        ("image", ".jpg")])
    if len(path_image) > 0:
        
       
        image = cv2.imread(path_image)
        
        image= imutils.resize(image, height=380)
        image2= imutils.resize(image, height=380)
        
        imageToShow= imutils.resize(image, height=380)
        imageToShow = cv2.cvtColor(imageToShow, cv2.COLOR_BGR2RGB)
        im = Image.fromarray(imageToShow)
        img = ImageTk.PhotoImage(image=im)
        
        lblOutputImage.configure(image=img)
        lblOutputImage.image = img
        
       
       
def deteccion_color():
    print('hola')
def leftClick(event):
    global sens
    global lista
    print(event.x,event.y) 
    a=(image.item(event.y,event.x,0),image.item(event.y,event.x,1),image.item(event.y,event.x,2))   
    print(a)
    pb=a[0]
    pg=a[1]
    pr=a[2]
    lista.append((pb,pg,pr)) 
    for i in range(0,image.shape[0]-10,10):
        for j in range(0,image.shape[1]-10,10):
            mb,mg,mr=0,0,0
            for ki in range(i,i+10):
                for kj in range(j,j+10):
                    
                    
                    mb=mb+image.item(i,j,0)
                    mg=mg+image.item(i,j,1)
                    mr=mr+image.item(i,j,2)
            mb=mb/100 
            mg=mg/100 
            mr=mr/100 
            
            d=np.sqrt(np.power(mb-pb,2)+np.power(mg-pg,2)+np.power(mr-pr,2))
            if(d<=sens):
                for ki in range(i,i+10):
                    for kj in range(j,j+10):
                        
                        
                        image.itemset((ki,kj,0),pb)
                        image.itemset((ki,kj,1),pg)
                        image.itemset((ki,kj,2),pr)
                
    imageToShow = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    im = Image.fromarray(imageToShow)
    img = ImageTk.PhotoImage(image=im)
    lblOutputImage.configure(image=img)
    lblOutputImage.image = img 
    
def limpiar():
    global image
    image = cv2.imread(path_image)
    image= imutils.resize(image, height=380)
    imageToShow= imutils.resize(image, height=380)
    imageToShow = cv2.cvtColor(imageToShow, cv2.COLOR_BGR2RGB)
    im = Image.fromarray(imageToShow)
    img = ImageTk.PhotoImage(image=im)
    
    lblOutputImage.configure(image=img)
    lblOutputImage.image = img
   
def rightClick(event):
    global lista
    print(lista)

    
def mostrarColores():
    global img1,lista
    c=0
    d=0
    for i in lista:
        for j in range(30):
            for k in range(30):
                img1[j+30*d][k+30*(c%2)][0]=i[0]
                img1[j+30*d][k+30*(c%2)][1]=i[1]
                img1[j+30*d][k+30*(c%2)][2]=i[2]
        d=int((c+1)/2)
        c=c+1
    imageT= cv2.cvtColor(img1, cv2.COLOR_BGR2RGB)
    im1 = Image.fromarray(imageT)
    img9 = ImageTk.PhotoImage(image=im1)
    lblInfo2.configure(image=img9)
    lblInfo2.image = img9 
def aumentar():
    
    global sens
    sens=sens+10
    lblInfo1.configure(text=str(sens))
    lblInfo1.text=str(sens)
   
    print(sens)
def disminuir():
    global sens;
    sens=sens-10
    lblInfo1.configure(text=str(sens))
    lblInfo1.text=str(sens)
   
    print(sens)
def limpiarLista():
    global lista,img1
    lista=[]
    img1 =255* np.ones((300,60,3),np.uint8)
    imageT= cv2.cvtColor(img1, cv2.COLOR_BGR2RGB)
    im1 = Image.fromarray(imageT)
    img9 = ImageTk.PhotoImage(image=im1)
    lblInfo2.configure(image=img9)
    lblInfo2.image = img9 

root = Tk()
root.geometry('1600x800')

lblInputImage = Label(root)
lblInputImage.grid(column=0, row=2)

lblOutputImage = Label(root)
lblOutputImage.grid(column=1, row=1, rowspan=6)
lblOutputImage.bind("<Button-1>",leftClick)
lblOutputImage.bind("<Button-3>",rightClick)

lblInfo1 = Label(root, text=str(sens), width=60)
lblInfo1.grid(column=0, row=3, padx=5, pady=5)
lblInfo2 = Label(root, text="Colores", width=60)
lblInfo2.grid(column=0, row=9, padx=5, pady=5)



btn = Button(root, text="Elegir imagen", width=25, command=elegir_imagen)
btn2 = Button(root, text="Limpiar Imagen", width=25, command=limpiar)
btn3 = Button(root, text="Mostrar Colores", width=25, command=mostrarColores)
btn4 = Button(root, text="+", width=10, command=aumentar)
btn5 = Button(root, text="-", width=10, command=disminuir)
btn6 = Button(root, text="Limpiar Lista", width=10, command=limpiarLista)
btn.grid(column=0, row=0, padx=5, pady=5)
btn2.grid(column=0, row=1, padx=5, pady=5)
btn3.grid(column=0, row=2, padx=5, pady=5)
btn4.grid(column=0, row=4, padx=5, pady=5)
btn5.grid(column=0, row=5, padx=5, pady=5)
btn6.grid(column=0, row=6, padx=5, pady=5)
root.mainloop()