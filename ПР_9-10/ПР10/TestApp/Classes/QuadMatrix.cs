using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestApp.Classes
{
    public class QuadMatrix
    {
        private int[,] matrx;
        private int prdk;
        private int srednee;
        private int sum;

        public int[,] _matrx { get; set; }
        public int _prdk { get; set; }

        private int index { get; set; }
        public void SetMatrix(int[,] Matrix, int Poriadok)
        {
          _matrx =  matrx = Matrix;
          _prdk =  prdk = Poriadok;
        }
        public QuadMatrix(int[,] m, int size)
        {
            matrx = m;
            prdk = size;
        }

        public int SredneeElementMatrix()
        {


            for (int i = 0; i < prdk; i++)
            {
                for (int j = 0; j < prdk; j++)
                {
                    sum += matrx[i, j];
                }

            }

            return srednee = sum / (prdk * prdk);
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
        public int LocationSrendee()
        {

            int a = 0;
            for (int i = 0; i < prdk; i++)
            {
               
                    sum = matrx[i, a++];
                

            }

            return sum;
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