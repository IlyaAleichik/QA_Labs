using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Tests;
using AppClasses;

namespace TestApplication
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Введите порядок матрицы");
            int pordk;
                KEK:
            try
            {
                pordk = int.Parse(Console.ReadLine());
            }
            catch
            {
                Console.WriteLine("Вводите заново, или вам хана (без шуток)");
                goto KEK;
            }
            int[,] matrix = new int[pordk, pordk];
            for (int i = 0; i < pordk; i++)
            {
                for (int j = 0; j < pordk; j++)
                {
                        BIGKEK:
                    try
                    {
                        Console.Write(i.ToString() + ", " + j.ToString() + " = ");
                        matrix[i, j] = int.Parse(Console.ReadLine());
                    }
                    catch (FormatException)
                    {
                        Console.WriteLine("А ну-ка нормальные символы вводи!");
                        goto BIGKEK;
                    }
                }
            }

            var MATRIX = new QuadMatrix(matrix, pordk);
            var otvet = MATRIX.GoReshenie();
            Console.WriteLine("Максимальное значение - " + otvet.Item1.ToString() + ", минимальное значение - " + otvet.Item2.ToString() + ", среднее арифметическое - " + otvet.Item3.ToString());
            MATRIX.Zamena();
            MATRIX.OutMatrix();
        }
    }
}
