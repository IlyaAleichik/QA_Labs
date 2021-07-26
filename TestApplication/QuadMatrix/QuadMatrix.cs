using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QuadMatrix
{
    public class QuadMatrix
    {
        private int[,] matrx;
        private int prdk;
        private int srednee;
        public void SetMatrix(int[,] Matrix, int Poriadok)
        {
            matrx = Matrix;
            prdk = Poriadok;
        }
        public Tuple<int, int, int> GoReshenie()
        {
            if (matrx == null)
                throw new Exception();

            int min = matrx[0, 0], max = matrx[0, 0];
            int a = prdk - 1;
            for (int i = 0; i < prdk; i++)
            {
                for (int j = --a; j > -1; j--)
                {
                    if (matrx[i, j] < min)
                        min = matrx[i, j];

                    if (matrx[i, j] > max)
                        max = matrx[i, j];
                }
            }
            int srendee = (min + max) / 2;
            this.srednee = srendee;
            Tuple<int, int, int> otvet = new Tuple<int, int, int>(max, min, srendee);
            return otvet;
        }

        public void Zamena()
        {
            if (matrx == null)
                throw new Exception();
            int a = 0;
            for (int i = 0; i < prdk; i++)
            {
                matrx[i, a++] = srednee;
            }
        }
        public void OutMatrix()
        {
            if (matrx == null)
                throw new Exception();

            for (int i = 0; i < prdk; i++)
            {
                for (int j = 0; j < prdk; j++)
                {
                    Console.Write(matrx[i, j].ToString() + "\t");
                }
                Console.WriteLine();
            }
        }
    }
}
