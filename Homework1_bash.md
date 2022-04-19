# HW_1. The first part
Linux terminal (GitBash) commands

1) Посмотреть где я
<code> pwd </code>

2) Создать папку
<code> mkdir homework1 </code>

3) Зайти в папку
<code>cd homework1</code>

4) Создать 3 папки
<code>mkdir folder1 folder2 folder3</code>

5) Зайти в любую папку
<code>cd folder1</code>

6) Создать 5 файлов (3 txt, 2 json)
<code>touch file1.txt file2.txt file3.txt file4.json file5.json</code>

7) Создать 3 папки
<code>mkdir folder1 folder2 folder3 </code>

8) Вывести список содержимого папки
<code>ls -la</code>

9) + Открыть любой txt файл
<code>vim file1.txt</code>

10) + написать туда что-нибудь, любой текст.
i
Hello QA, this is homework number 1.

11) + сохранить и выйти.
esc
<code>:wq</code>

12) Выйти из папки на уровень выше
<code>cd ..</code>

13) переместить любые 2 файла, которые вы создали, в любую другую папку.
<code>mv folder1/file1.txt file2.txt folder3/</code>

14) скопировать любые 2 файла, которые вы создали, в любую другую папку
<code>cp folder1/file3.txt file4.json folder2/</code>

15) Найти файл по имени
<code>find . -name file1.txt</code>

16) просмотреть содержимое в реальном времени (команда grep) изучите как она работает. 
<code>tail -f folder1/file3.txt | grep test</code>

{как я понял, tail покажет только 10 последних строк файла, другой альтернативы чтобы добавить -f для реального времени не существует (cat -f folder1/file3.txt)} 

17) вывести несколько первых строк из текстового файла
<code>head -n3 folder1/file3.txt </code>

18) вывести несколько последних строк из текстового файла
<code>tail -n3 folder1/file3.txt</code>

19) просмотреть содержимое длинного файла (команда less) изучите как она работает.
<code>less folder1/file3.txt</code>

20) вывести дату и время
<code>date</code>

=========
C
Задание *
1) Отправить http запрос на сервер.
http://162.55.220.72:5005/terminal-hw-request

<code>curl http://162.55.220.72:5005/terminal-hw-request</code>

1.1 {"Intro":"Hello!! This is your the first response from server","Tasks":{"Task_1":"Send the next URL in terminal: http://162.55.220.72:5005/get_method?name=(set_your_String)&age=(set_your_number)","result":["Your_String","Your_number"]}}

<code>curl http://162.55.220.72:5005/'get_method?name=Maksim&age=27'</code>

2) Написать скрипт который выполнит автоматически пункты 3, 4, 5, 6, 7, 8, 13

Touch homework.sh
Nano homework.sh
Print in the file

<code>
#!bin/bash
#script for homework
cd homework_1
mkdir folder1_1 folder2_1 folder3_1
cd folder1_1
touch file1_1.txt file2_1.txt file3_1.txt file4_1.json file5_1.json
mkdir folder1_1_1 folder2_1_1 folder3_1_1
ls -la
mv file1_1.txt file2_1.txt folder2_1_1 
</code>

sh homework.sh
