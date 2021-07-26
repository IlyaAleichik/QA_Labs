using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TestApp.Classes;

namespace TestApp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Введите порядок матрицы  \n");
            int pordk;
            c1:
            try
            {
                pordk = int.Parse(Console.ReadLine());
            }
            catch
            {
                Console.WriteLine("Введите корректные значения!");
                goto c1;
            }
            int[,] matrix = new int[pordk, pordk];
            Random rnd = new Random();
            for (int i = 0; i < pordk; i++)
            {
                for (int j = 0; j < pordk; j++)
                {
                    c2:
                    try
                    {

                        matrix[i, j] = Int32.Parse(Console.ReadLine());
                    }
                    catch (FormatException)
                    {
                        Console.WriteLine("Что то пошло не так !");
                        goto c2;
                    }
                }
            }

            var matrixx = new QuadMatrix(matrix, pordk);
            var otvet = matrixx.SredneeElementMatrix();
            Console.WriteLine("среднее арифметическое - " + otvet.ToString());
            Console.WriteLine(" \n");
            matrixx.OutMatrix();
            Console.WriteLine("\n Замена: \n");
            matrixx.Zamena();
            matrixx.OutMatrix();
            Console.ReadLine();
        }
    }
}
