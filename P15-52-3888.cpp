#include <stdlib.h>
#include <glut.h>
#include <stdio.h>
#include <corecrt_math.h>
#include <time.h>
#include <iostream>
#include <sstream>;

/*
void Display() {
	glBegin(GL_TRIANGLES);
		glColor3f(1.0f, 0.0f, 0.0f);
		glVertex3f(300.0f, 200.0f, 0.0f);
		glColor3f(0.0f, 1.0f, 0.0f);
		glVertex3f(100.0f, 100.0f, 0.0f);
		glColor3f(0.0f, 0.0f, 1.0f);
		glVertex3f(200.0f, 100.0f, 0.0f);


	glEnd();

	glFlush();
}

*/
int ob[6][4];
int co[6][4];

int ps[6][4];
int speed = 1;
int g[2];
double timee = 0;
bool win = false;
void obsticale1() {
	glColor3f(1, 0, 0.0f);
	glBegin(GL_QUADS);
	glVertex2f(-10, -10);
	glVertex2f(-10, 10);
	glVertex2f(10, 10);
	glVertex2f(10, -10);

	glEnd();
	glFlush();
	glColor3f(1.0f, 1.0f, 0.0f);
	glBegin(GL_POLYGON);
	for (int i = 0; i < 360; i++) {
		float theta = i * 3.1415926 / 180;
		float x = 5 * cos(theta);
		float y = 5 * sin(theta);
		glVertex2f(x, y);
	}
	glEnd();
	glFlush();


}

void obsticale2() {

	glColor3f(1, 0.0f, 0.0f);
	glBegin(GL_POLYGON);
	for (int i = 0; i < 360; i++) {
		float theta = i * 3.1415926 / 180;
		float x = 12.5 * cos(theta);
		float y = 12.5 * sin(theta);
		glVertex2f(x, y);
	}
	glEnd();
	glFlush();
	glColor3f(1.0f, 1.0f, 0.0f);
	glBegin(GL_POLYGON);
	for (int i = 0; i < 360; i++) {
		float theta = i * 3.1415926 / 180;
		float x = 6.25 * cos(theta);
		float y = 6.25 * sin(theta);
		glVertex2f(x, y);
	}
	glEnd();
	glFlush();



}

void obsticale3() {
	glColor3f(1, 0.0f, 0.0f);
	glBegin(GL_QUADS);
	glVertex2f(-10, -10);
	glVertex2f(-10, 10);
	glVertex2f(10, 10);
	glVertex2f(10, -10);

	glEnd();
	glFlush();
	glColor3f(1.0f, 1.0f, 0.0f);
	glBegin(GL_TRIANGLES);
	glVertex2f(-10, 10);
	glVertex2f(10, 10);
	glVertex2f(0, 20);
	glEnd();
	glFlush();


}

void obsticale4() {

	glColor3f(1.0f, 1.0f, 0.0f);
	glBegin(GL_TRIANGLES);
	glVertex2f(-10, 0);
	glVertex2f(10, 00);
	glVertex2f(0, 10);
	glEnd();
	glFlush();
	glColor3f(1.0f, 0.0f, 0.0f);
	glBegin(GL_TRIANGLES);
	glVertex2f(-10, 0);
	glVertex2f(10, 00);
	glVertex2f(0, -10);
	glEnd();
	glFlush();




}
void powerup1() {
	glColor3f(1.0f, 1.0f, 0.0f);
	glBegin(GL_POLYGON);
	for (int i = 0; i < 360; i++) {
		float theta = i * 3.1415926 / 180;
		float x = 6.25 * cos(theta);
		float y = 6.25 * sin(theta);
		glVertex2f(x, y);
	}
	glEnd();
	glFlush();
	glColor3f(0.0f, 1.0f, 0.0f);
	glBegin(GL_POLYGON);
	for (int i = 0; i < 360; i++) {
		float theta = i * 3.1415926 / 180;
		float x = 2.5 * cos(theta);
		float y = 2.5 * sin(theta);
		glVertex2f(x, y);
	}
	glEnd();
	glFlush();
	glColor3f(0.0f, 1.0f, 0.0f);
	glBegin(GL_POLYGON);
	for (int i = 0; i < 360; i++) {
		float theta = i * 3.1415926 / 180;
		float x = 2.5 * cos(theta);
		float y = 6.25 + 2.5 * sin(theta);
		glVertex2f(x, y);
	}
	glEnd();
	glFlush();


}
void powerup2() {













	glColor3f(0.0f, 1.0f, 1.0f);
	glBegin(GL_POLYGON);
	glVertex2f(-10, -10);
	glVertex2f(-10, 10);
	glVertex2f(10, 10);
	glVertex2f(10, -10);
	glEnd();
	glFlush();
	powerup1();
}



void COL() {

	glColor3f(0.0f, 1.0f, 1.0f);
	glBegin(GL_POLYGON);
	glVertex2f(-15, -10);
	glVertex2f(-15, 10);
	glVertex2f(15, 10);
	glVertex2f(15, -10);
	glEnd();
	glFlush();
	powerup1();
}

void COL2() {

	glColor3f(0.0f, 1.0f, 1.0f);
	glBegin(GL_POLYGON);
	glVertex2f(-15, -10);
	glVertex2f(15, -10);
	glVertex2f(0, 10);

	glEnd();
	glFlush();
	powerup1();
}




void boundry() {

}

void boundry2() {

}

void boundry3() {

}

void boundry4() {

}









void gameover() {
	glPointSize(100);

	glColor3f(1.0f, 0.0f, 0.0f);
	glBegin(GL_POLYGON);
	for (int i = 0; i < 360; i++) {
		float theta = i * 3.1415926 / 180;
		float x = 150 + 12.5 * cos(theta);
		float y = 150 + 12.5 * sin(theta);
		glVertex2f(x, y);
	}
	glEnd();
	glFlush();

}





void player() {
	glPointSize(100);
	glColor3f(1.0f, 0.0f, 0.0f);
	glBegin(GL_POLYGON);
	for (int i = 0; i < 360; i++) {
		float theta = i * 3.1415926 / 180;
		float x = 12.5 * cos(theta);
		float y = 12.5 * sin(theta);
		glVertex2f(x, y);
	}
	glEnd();
	glColor3f(0, 1.0f, 0.0f);
	glBegin(GL_QUADS);
	glVertex2f(-6.25, 12.5);
	glVertex2f(6.25, 12.5);
	glVertex2f(6.25, 25);
	glVertex2f(-6.25, 25);

	glEnd();

	glBegin(GL_LINES);
	glVertex2f(2.5, -12.5);
	glVertex2f(2.5, -25);
	glEnd();
	glBegin(GL_LINES);
	glVertex2f(-2.5, -12.5);
	glVertex2f(-2.5, -25);
	glEnd();





	glFlush();

}
float x = 1.5;
float y = 1.5;
char d = 'u';
float size = 0.9;
int h = 50;

int s = 0;
double playsize = 0.5;

void draw(char* str) {
	int i;
	for (i = 0; str[i] != '\0'; i++) {
		glutBitmapCharacter(GLUT_BITMAP_HELVETICA_18, str[i]);
	}
}



void p() {
	glColor3f(1, 0, 0);
	glBegin(GL_POLYGON);
	for (int i = 0; i < 360; i++) {
		float theta = i * 3.1415926 / 180;
		float x = 5 + 12.5 * cos(theta);
		float y = 12.5 * sin(theta);
		glVertex2f(x, y);
	}
	glEnd();
	glFlush();


	glColor3f(1, 0, 0);
	glBegin(GL_POLYGON);
	for (int i = 0; i < 360; i++) {
		float theta = i * 3.1415926 / 180;
		float x = -5 + 12.5 * cos(theta);
		float y = 12.5 * sin(theta);
		glVertex2f(x, y);
	}
	glEnd();
	glFlush();
	glColor3f(0, 1, 0);
	glBegin(GL_LINES);
	glVertex2f(0, 0);
	glVertex2f(0, 20);
	glEnd();
	glFlush();

	glBegin(GL_QUADS);
	glVertex2f(0, 20);
	glVertex2f(0, 15);
	glVertex2f(5, 15);
	glVertex2f(5, 20);
	glEnd();
	glFlush();









}



void p2() {
	glColor3f(0.67, 0.33, 0);
	glBegin(GL_POLYGON);
	for (int i = 0; i < 360; i++) {
		float theta = i * 3.1415926 / 180;
		float x = 5 + 12.5 * cos(theta);
		float y = 12.5 * sin(theta);
		glVertex2f(x, y);
	}
	glEnd();
	glFlush();


	glColor3f(0.67, 0.33, 0);
	glBegin(GL_POLYGON);
	for (int i = 0; i < 360; i++) {
		float theta = i * 3.1415926 / 180;
		float x = -5 + 12.5 * cos(theta);
		float y = 12.5 * sin(theta);
		glVertex2f(x, y);
	}
	glEnd();
	glFlush();
	glColor3f(0, 1, 0);
	glBegin(GL_LINES);
	glVertex2f(0, 0);
	glVertex2f(0, 20);
	glEnd();
	glFlush();

	glBegin(GL_QUADS);
	glVertex2f(0, 20);
	glVertex2f(0, 15);
	glVertex2f(5, 15);
	glVertex2f(5, 20);
	glEnd();
	glFlush();









}




void boundies() {
	glBegin(GL_LINE_LOOP);
	glVertex2f(10, 5);
	glVertex2f(10, 300);
	glVertex2f(300, 300);
	glVertex2f(300, 5);
	glEnd();
	glFlush();
}

void goal() {

	glColor3f(0, 1, 0);
	glBegin(GL_POLYGON);
	for (int i = 0; i < 360; i++) {
		float theta = i * 3.1415926 / 180;
		float x = 12.5 * cos(theta);
		float y = 12.5 * sin(theta);
		glVertex2f(x, y);
	}
	glEnd();
	glFlush();


	glColor3f(0, 0, 1);
	glBegin(GL_POLYGON);
	for (int i = 0; i < 360; i++) {
		float theta = i * 3.1415926 / 180;
		float x = 6.25 * cos(theta);
		float y = 6.25 * sin(theta);
		glVertex2f(x, y);
	}
	glEnd();
	glFlush();


	glColor3f(0, 1, 1);
	glBegin(GL_TRIANGLES);
	glVertex2f(-5, 12.5);
	glVertex2f(5, 12.5);
	glVertex2f(0, 15);
	glEnd();
	glFlush();


}



void winn() {
	glColor3f(0.0f, 1.0f, 0.0f);
	glBegin(GL_POLYGON);
	for (int i = 0; i < 360; i++) {
		float theta = i * 3.1415926 / 180;
		float x = 150 + 12.5 * cos(theta);
		float y = 150 + 12.5 * sin(theta);
		glVertex2f(x, y);
	}
	glEnd();
	glFlush();
}





void render() {
	// Draw shape one













	glClear(GL_COLOR_BUFFER_BIT);
	if (win) {
		glutDisplayFunc(winn);
		return;
	}

	if (timee < 20 && h>10) {

		// Draw shape two

		boundies();

		glRasterPos2i(250, 290);
		std::stringstream ss;
		ss << s;
		std::string result = "score:" + ss.str();
		char myArray[10];
		strcpy(myArray, result.c_str());
		draw(myArray);



		glRasterPos2i(200, 290);
		std::stringstream sss;
		sss << timee;
		std::string res = "time:" + sss.str();

		strcpy(myArray, res.c_str());
		draw(myArray);



		glPushMatrix();


		glTranslatef(g[0], g[1], 0);
		goal();
		glPopMatrix();





		glPushMatrix();


		glTranslatef(x * 100, y * 100, 0);

		glTranslatef((0), (0), 0);
		glScalef(playsize, playsize, playsize);
		if (d == 'd') {
			glRotatef(180.0f, 0, 0, 1);
		}
		if (d == 'r') {

			glRotatef(-90, 0, 0, 1);
		}
		if (d == 'l') {

			glRotatef(90, 0, 0, 1);
		}

		glTranslatef(0, 0, 0);
		player();
		glPopMatrix();
		int w = 40;
		glBegin(GL_QUADS);
		glVertex2f(0, 250 + w);
		glVertex2f(0, 260 + w);
		glVertex2f(h, 260 + w);
		glVertex2f(h, 250 + w);

		glEnd();
		glFlush();

		for (int l = 0; l < 6; l++) {

			if (ps[l][2] == 1) {
				glPushMatrix();

				glTranslatef(ps[l][0], ps[l][1], 0);
				glScalef(size / 2, size / 2, size / 2);
				if (ps[l][3] == 1) {
					p();
				}
				else {
					p2();
				}
				glPopMatrix();

			}
		}



















		for (int l = 0; l < 6; l++) {

			if (co[l][2] == 1) {


				if (co[l][3] == 1)
				{
					glPushMatrix();

					glTranslatef(co[l][0], co[l][1], 0);
					glScalef(size, size, size);
					powerup1();
					glPopMatrix();
				}

				if (co[l][3] == 2)
				{
					glPushMatrix();

					glTranslatef(co[l][0], co[l][1], 0);
					glScalef(size, size, size);
					powerup2();
					glPopMatrix();
				}

				if (co[l][3] == 3)
				{
					glPushMatrix();

					glTranslatef(co[l][0], co[l][1], 0);
					glScalef(size, size, size);
					COL();
					glPopMatrix();
				}

				if (co[l][3] == 4)
				{
					glPushMatrix();

					glTranslatef(co[l][0], co[l][1], 0);
					glScalef(size, size, size);
					COL2();
					glPopMatrix();
				}
			}
		}














		for (int l = 0; l < 6; l++) {

			if (ob[l][2] == 1) {
				if (ob[l][3] == 1) {
					glPushMatrix();
					//	glScalef (0.3, 0.3, 0.3);
					glTranslatef(ob[l][0], ob[l][1], 0);
					glScalef(size, size, size);
					obsticale1();
					glPopMatrix();
				}
				if (ob[l][3] == 2) {
					glPushMatrix();
					//	glScalef (0.3, 0.3, 0.3);
					glTranslatef(ob[l][0], ob[l][1], 0);
					glScalef(size, size, size);
					obsticale2();
					glPopMatrix();
				}
				if (ob[l][3] == 3) {
					glPushMatrix();
					//	glScalef (0.3, 0.3, 0.3);
					glTranslatef(ob[l][0], ob[l][1], 0);
					glScalef(size, size, size);
					obsticale3();
					glPopMatrix();
				}
				if (ob[l][3] == 4) {
					glPushMatrix();
					//	glScalef (0.3, 0.3, 0.3);
					glTranslatef(ob[l][0], ob[l][1], 0);
					glScalef(size, size, size);
					obsticale4();
					glPopMatrix();
				}

			}

		}
	}
	else {
		std::cout << "here";


		glutDisplayFunc(gameover);



	}






}


void specialKeys(int key, int z, int w) {
	switch (key) {
	case GLUT_KEY_UP:
		d = 'u';
		y += 0.1f * speed;
		break;
	case GLUT_KEY_DOWN:
		d = 'd';	y -= 0.1f * speed;
		break;
	case GLUT_KEY_LEFT:
		d = 'l'; x -= 0.1f * speed;
		break;
	case GLUT_KEY_RIGHT:
		d = 'r'; x += 0.1f * speed;
		break;
	}
	if (x * 100 > 290 || y * 100 > 290 || y < 0 || x < 0) {
		switch (key) {
		case GLUT_KEY_UP:
			d = 'u';
			y -= 0.1f * speed;
			break;
		case GLUT_KEY_DOWN:
			d = 'd';	y += 0.1f * speed;
			break;
		case GLUT_KEY_LEFT:
			d = 'l'; x += 0.1f * speed;
			break;
		case GLUT_KEY_RIGHT:
			d = 'r'; x -= 0.1f * speed;
			break;
		}

	}

	std::cout << x * 100 - ps[0][0] << std::endl;
	std::cout << y * 100 - ps[0][1] << std::endl;
	for (int l = 0; l < 6; l++) {
		if (ob[l][2] == 1) {
			if (abs((int)(ob[l][0] - (x * 100))) < 30 && abs((int)(ob[l][1] - (y * 100))) < 30) {

				h -= 10;
				ob[l][2] = 0;
			}


		}
	}

	for (int l = 0; l < 6; l++) {
		if (co[l][2] == 1) {
			if (abs((int)(co[l][0] - (x * 100))) < 30 && abs((int)(co[l][1] - (y * 100))) < 30) {

				s += 1;
				co[l][2] = 0;
			}


		}
	}



	for (int l = 0; l < 6; l++) {
		if (ps[l][2] == 1) {
			if (abs((int)(ps[l][0] - (x * 100))) < 30 && abs((int)(ps[l][1] - (y * 100))) < 30) {
				if (ps[l][3] == 1) {
					speed += 1;
				}
				else {
					playsize += 0.2;
				}
				ps[l][2] = 0;
			}


		}
	}
	if (abs((int)g[0] - x * 100) < 30 && abs((int)g[1] - y * 100) < 30) {
		win = true;
	}















	glutPostRedisplay();
}bool expand = false;
void timer(int value) {
	// Increase the size of the square
	if (size >= 1) {
		expand = false;


	}
	if (size < 0.7) {
		expand = true;
	}
	if (!expand) {


		size -= 0.01;
	}
	if (expand) {
		size += 0.01;
	}
	// Redraw the scene

	timee += 0.1;

	glutPostRedisplay();

	// Call this function again after 1 second
	glutTimerFunc(100, timer, 0);
}

void main(int argc, char** argr) {


	srand(time(0));

	int obs[6][4] = { {(rand() % 300)  , (rand() % 300)  ,1,rand() % 5}
	,{ (rand() % 300)  , (rand() % 300)  ,1 ,rand() % 5  }
	,{ (rand() % 300)  , (rand() % 300)  ,1 ,rand() % 5  }
	,{ (rand() % 300)  , (rand() % 300)  ,1 ,rand() % 5  }
	,{ (rand() % 300)  , (rand() % 300)  ,1 ,rand() % 5  }
	,{ (rand() % 300)  , (rand() % 300)  ,1  ,rand() % 5 }
	, };
	int coll[6][4] = { {(rand() % 300)  , (rand() % 300)  ,1,rand() % 5}
	,{ (rand() % 300)  , (rand() % 300)  ,1 ,rand() % 5  }
	,{ (rand() % 300)  , (rand() % 300)  ,1 ,rand() % 5  }
	,{ (rand() % 300)  , (rand() % 300)  ,1 ,rand() % 5  }
	,{ (rand() % 300)  , (rand() % 300)  ,1 ,rand() % 5  }
	,{ (rand() % 300)  , (rand() % 300)  ,1  ,rand() % 5 }
	, };
	int pss[6][4] = { {(rand() % 300)  , (rand() % 300)  ,1,rand() % 2}
	,{ (rand() % 300)  , (rand() % 300)  ,1 ,rand() % 2  }
	,{ (rand() % 300)  , (rand() % 300)  ,1 ,rand() % 2  }
	,{ (rand() % 300)  , (rand() % 300)  ,1 ,rand() % 2  }
	,{ (rand() % 300)  , (rand() % 300)  ,1 ,rand() % 2  }
	,{ (rand() % 300)  , (rand() % 300)  ,1  ,rand() % 2 }
	, };

	int gtemp[2] = { (rand() % 300)  , (rand() % 300) };

	for (int i = 0; i < 2; i++)
	{
		g[i] = gtemp[i];
	}

	for (int l = 0; l < 6; l++) {


		for (int j = 0; j < 4; j++) {

			ob[l][j] = obs[l][j];
		}


	}


	for (int l = 0; l < 6; l++) {


		for (int j = 0; j < 4; j++) {

			co[l][j] = coll[l][j];
		}


	}

	for (int l = 0; l < 6; l++) {


		for (int j = 0; j < 4; j++) {

			ps[l][j] = pss[l][j];
			std::cout << ps[l][j] << std::endl;
		}


	}


	glutInit(&argc, argr);


	glutInitWindowSize(600, 600);
	glutInitWindowPosition(300, 300);

	glutCreateWindow("OpenGL - 2D Template");

	glutDisplayFunc(render);
	glutSpecialFunc(specialKeys);
	glutTimerFunc(100, timer, 0);
	glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
	glClearColor(0.0f, 0.0f, 0.0f, 0.0f);
	gluOrtho2D(0.0, 300, 0.0, 300);

	glutMainLoop();
}